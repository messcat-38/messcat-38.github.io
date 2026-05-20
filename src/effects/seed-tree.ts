import * as THREE from "three"
import type { EffectMount } from "./core/types"
import { createEffectContext, runAnimationLoop } from "./core/engine"

type BranchNode = {
  start: THREE.Vector3
  direction: THREE.Vector3
  length: number
  radius: number
  progress: number
  depth: number
  maxDepth: number
  children: BranchNode[]
  spawned: boolean
}

type Tree = {
  root: THREE.Vector3
  trunk: BranchNode
  lines: THREE.LineSegments
  geometry: THREE.BufferGeometry
}

type Seed = {
  mesh: THREE.Mesh
  vy: number
  groundY: number
}

function randRange(rng: () => number, min: number, max: number) {
  return min + rng() * (max - min)
}

function createBranch(
  start: THREE.Vector3,
  direction: THREE.Vector3,
  length: number,
  radius: number,
  depth: number,
  maxDepth: number
): BranchNode {
  return {
    start: start.clone(),
    direction: direction.clone().normalize(),
    length,
    radius,
    progress: 0,
    depth,
    maxDepth,
    children: [],
    spawned: false,
  }
}

function spawnChildren(node: BranchNode, rng: () => number) {
  if (node.spawned || node.depth >= node.maxDepth) return
  node.spawned = true
  const end = node.start.clone().add(node.direction.clone().multiplyScalar(node.length))
  const count = node.depth === 0 ? 1 : Math.floor(randRange(rng, 2, 4))
  for (let i = 0; i < count; i++) {
    const yaw = randRange(rng, -0.9, 0.9)
    const pitch = randRange(rng, 0.35, 1.1)
    const dir = new THREE.Vector3(0, 1, 0)
      .applyAxisAngle(new THREE.Vector3(0, 0, 1), yaw + (i - count / 2) * 0.4)
      .applyAxisAngle(new THREE.Vector3(1, 0, 0), pitch * (node.depth < 2 ? 0.5 : 1))
    const len = node.length * randRange(rng, 0.55, 0.82)
    const child = createBranch(end, dir, len, node.radius * randRange(rng, 0.65, 0.8), node.depth + 1, node.maxDepth)
    node.children.push(child)
  }
}

function collectSegments(node: BranchNode, positions: number[], colors: number[], depthColor: number) {
  const grown = node.length * node.progress
  if (grown <= 0.001) return
  const end = node.start.clone().add(node.direction.clone().multiplyScalar(grown))
  positions.push(node.start.x, node.start.y, node.start.z, end.x, end.y, end.z)
  const g = 0.35 + (1 - depthColor / node.maxDepth) * 0.45
  const r = 0.25 + depthColor * 0.08
  const b = 0.12 + depthColor * 0.04
  colors.push(r, g, b, r * 0.9, g * 1.05, b * 0.9)
  node.children.forEach((c) => collectSegments(c, positions, colors, depthColor + 1))
}

const FIELD_HALF_W = 6
const FIELD_HALF_H = 4

function pointInPolygon2D(px: number, py: number, poly: { x: number; y: number }[]) {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const xi = poly[i].x
    const yi = poly[i].y
    const xj = poly[j].x
    const yj = poly[j].y
    if ((yi > py) !== (yj > py) && px < ((xj - xi) * (py - yi)) / (yj - yi) + xi) {
      inside = !inside
    }
  }
  return inside
}

function ndcFromClient(clientX: number, clientY: number, dom: HTMLElement) {
  const rect = dom.getBoundingClientRect()
  if (rect.width === 0 || rect.height === 0) return null
  return new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -((clientY - rect.top) / rect.height) * 2 + 1
  )
}

function pickGroundPoint(
  ndc: THREE.Vector2,
  ground: THREE.Mesh,
  camera: THREE.Camera,
  raycaster: THREE.Raycaster
) {
  ground.updateMatrixWorld(true)
  camera.updateMatrixWorld(true)

  const corners = [
    new THREE.Vector3(-FIELD_HALF_W, -FIELD_HALF_H, 0),
    new THREE.Vector3(FIELD_HALF_W, -FIELD_HALF_H, 0),
    new THREE.Vector3(FIELD_HALF_W, FIELD_HALF_H, 0),
    new THREE.Vector3(-FIELD_HALF_W, FIELD_HALF_H, 0),
  ]
  const ndcPoly = corners.map((p) => {
    const projected = p.clone().applyMatrix4(ground.matrixWorld).project(camera)
    return { x: projected.x, y: projected.y }
  })
  if (!pointInPolygon2D(ndc.x, ndc.y, ndcPoly)) return null

  raycaster.setFromCamera(ndc, camera)
  const hits = raycaster.intersectObject(ground, false)
  if (hits.length === 0) return null
  return hits[0].point
}

function updateTreeGeometry(tree: Tree) {
  const positions: number[] = []
  const colors: number[] = []
  collectSegments(tree.trunk, positions, colors, 0)
  tree.geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
  tree.geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3))
  tree.geometry.attributes.position.needsUpdate = true
  if (tree.geometry.attributes.color) tree.geometry.attributes.color.needsUpdate = true
}

export const mountSeedTree: EffectMount = (container, options) => {
  const ctx = createEffectContext(container, options)
  const maxDepth = ctx.preview ? 4 : 6
  const GROUND_Y = -1.5
  const SPAWN_Y = 2.8
  const GRAVITY = 12

  const trees: Tree[] = []
  const seeds: Seed[] = []
  const rng = () => Math.random()

  const groundGeo = new THREE.PlaneGeometry(12, 8)
  const groundMat = new THREE.MeshStandardMaterial({ color: 0x1a2e1a, roughness: 0.95 })
  const ground = new THREE.Mesh(groundGeo, groundMat)
  ground.rotation.x = -Math.PI / 2
  ground.position.y = GROUND_Y
  ctx.scene.add(ground)

  if (import.meta.env.DEV) {
    const edgeLines = new THREE.LineSegments(
      new THREE.EdgesGeometry(groundGeo),
      new THREE.LineBasicMaterial({ color: 0x4ade80 })
    )
    ground.add(edgeLines)
  }

  ctx.scene.add(new THREE.AmbientLight(0xffffff, 0.55))
  const sun = new THREE.DirectionalLight(0xfff5e6, 0.9)
  sun.position.set(4, 8, 5)
  ctx.scene.add(sun)

  ctx.camera.position.set(0, 1.5, 5)
  ctx.camera.lookAt(0, 0, 0)

  const seedGeo = new THREE.SphereGeometry(0.06, 8, 8)
  const seedMat = new THREE.MeshStandardMaterial({ color: 0x8b5a2b, roughness: 0.8 })

  const germinate = (root: THREE.Vector3) => {
    const trunk = createBranch(
      root,
      new THREE.Vector3(0, 1, 0),
      ctx.preview ? 0.5 : 0.7,
      0.08,
      0,
      maxDepth
    )
    const geo = new THREE.BufferGeometry()
    const mat = new THREE.LineBasicMaterial({ vertexColors: true, linewidth: 1 })
    const lines = new THREE.LineSegments(geo, mat)
    ctx.scene.add(lines)
    trees.push({ root: root.clone(), trunk, lines, geometry: geo })
  }

  const plantSeed = (clientX: number, clientY: number) => {
    const ndc = ndcFromClient(clientX, clientY, ctx.renderer.domElement)
    if (!ndc) return

    const point = pickGroundPoint(ndc, ground, ctx.camera, ctx.raycaster)
    if (import.meta.env.DEV) {
      console.debug("[seed-tree] plant attempt", {
        ndc: [ndc.x, ndc.y],
        planted: point !== null,
      })
    }
    if (!point) return

    const seedMesh = new THREE.Mesh(seedGeo, seedMat.clone())
    seedMesh.position.set(point.x, SPAWN_Y, point.z)
    ctx.scene.add(seedMesh)
    seeds.push({ mesh: seedMesh, vy: 0, groundY: GROUND_Y + 0.06 })
  }

  const onPointerDown = (e: PointerEvent) => {
    if (e.button !== 0) return
    plantSeed(e.clientX, e.clientY)
  }
  ctx.renderer.domElement.addEventListener("pointerdown", onPointerDown)

  const growSpeed = ctx.preview ? 1.2 : 0.85

  const growBranch = (node: BranchNode, delta: number) => {
    if (node.progress < 1) {
      node.progress = Math.min(1, node.progress + delta * growSpeed * (1.1 - node.depth * 0.08))
    }
    if (node.progress > 0.75 && !node.spawned) {
      spawnChildren(node, rng)
    }
    node.children.forEach((c) => growBranch(c, delta))
  }

  const stopLoop = runAnimationLoop(ctx, (delta) => {
    for (let i = seeds.length - 1; i >= 0; i--) {
      const seed = seeds[i]
      seed.vy -= GRAVITY * delta
      seed.mesh.position.y += seed.vy * delta
      if (seed.mesh.position.y <= seed.groundY) {
        seed.mesh.position.y = seed.groundY
        germinate(seed.mesh.position.clone())
        ;(seed.mesh.material as THREE.Material).dispose()
        ctx.scene.remove(seed.mesh)
        seeds.splice(i, 1)
      }
    }

    trees.forEach((tree) => {
      growBranch(tree.trunk, delta)
      updateTreeGeometry(tree)
    })
    ctx.camera.position.x = Math.sin(ctx.clock.elapsedTime * 0.15) * 0.3
    ctx.camera.lookAt(0, 0, 0)
  })

  return () => {
    stopLoop()
    ctx.renderer.domElement.removeEventListener("pointerdown", onPointerDown)
    groundGeo.dispose()
    groundMat.dispose()
    seedGeo.dispose()
    seedMat.dispose()
    trees.forEach((t) => {
      t.geometry.dispose()
      ;(t.lines.material as THREE.Material).dispose()
      ctx.scene.remove(t.lines)
    })
    seeds.forEach((s) => {
      ;(s.mesh.material as THREE.Material).dispose()
      ctx.scene.remove(s.mesh)
    })
    ctx.dispose()
  }
}
