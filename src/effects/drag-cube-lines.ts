import * as THREE from "three"
import type { EffectMount } from "./core/types"
import { createEffectContext, runAnimationLoop } from "./core/engine"

export const mountDragCubeLines: EffectMount = (container, options) => {
  const ctx = createEffectContext(container, options)
  const nodeCount = ctx.preview ? 5 : 12
  const nodes: THREE.Mesh[] = []
  const nodeVel: THREE.Vector3[] = []
  const orbitRadius: number[] = []
  const orbitPhase: number[] = []

  for (let i = 0; i < nodeCount; i++) {
    const r = 0.08 + Math.random() * 0.18
    const geo = new THREE.SphereGeometry(r, 14, 14)
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(Math.random(), 0.55, 0.55),
      metalness: 0.35,
      roughness: 0.4,
    })
    const mesh = new THREE.Mesh(geo, mat)
    const radius = 1.2 + Math.random() * 1.8
    orbitRadius.push(radius)
    orbitPhase.push(Math.random() * Math.PI * 2)
    mesh.position.set(
      Math.cos(orbitPhase[i]) * radius,
      (Math.random() - 0.5) * 1.2,
      Math.sin(orbitPhase[i]) * radius
    )
    ctx.scene.add(mesh)
    nodes.push(mesh)
    nodeVel.push(new THREE.Vector3())
  }

  const cubeGeo = new THREE.BoxGeometry(0.5, 0.5, 0.5)
  const cubeMat = new THREE.MeshStandardMaterial({ color: 0x3b82f6, metalness: 0.5, roughness: 0.3 })
  const cube = new THREE.Mesh(cubeGeo, cubeMat)
  ctx.scene.add(cube)

  const lineGeo = new THREE.BufferGeometry()
  const lineMat = new THREE.LineBasicMaterial({ color: 0x60a5fa, transparent: true, opacity: 0.75 })
  const lines = new THREE.LineSegments(lineGeo, lineMat)
  ctx.scene.add(lines)

  ctx.scene.add(new THREE.AmbientLight(0xffffff, 0.55))
  const dl = new THREE.DirectionalLight(0xffffff, 0.95)
  dl.position.set(3, 4, 5)
  ctx.scene.add(dl)

  let dragging = false
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
  const intersect = new THREE.Vector3()
  const gravity = new THREE.Vector3()
  const tangent = new THREE.Vector3()
  const offset = new THREE.Vector3()

  const onDown = (e: PointerEvent) => {
    ctx.raycaster.setFromCamera(ctx.mouse, ctx.camera)
    const hit = ctx.raycaster.intersectObject(cube)
    if (hit.length) {
      dragging = true
      ctx.renderer.domElement.setPointerCapture(e.pointerId)
    }
  }
  const onUp = (e: PointerEvent) => {
    dragging = false
    try {
      ctx.renderer.domElement.releasePointerCapture(e.pointerId)
    } catch {
      /* already released */
    }
  }
  const onMove = () => {
    if (!dragging) return
    ctx.raycaster.setFromCamera(ctx.mouse, ctx.camera)
    if (ctx.raycaster.ray.intersectPlane(plane, intersect)) {
      cube.position.copy(intersect)
    }
  }

  ctx.renderer.domElement.addEventListener("pointerdown", onDown)
  ctx.renderer.domElement.addEventListener("pointerup", onUp)
  ctx.renderer.domElement.addEventListener("pointermove", onMove)

  const stopLoop = runAnimationLoop(ctx, (delta) => {
    const dt = Math.min(delta, 0.05)
    const G = ctx.preview ? 4.5 : 7

    nodes.forEach((sphere, i) => {
      offset.subVectors(sphere.position, cube.position)
      const dist = Math.max(offset.length(), 0.35)

      gravity.subVectors(cube.position, sphere.position).normalize().multiplyScalar((G * dt) / (dist * dist))

      tangent.set(-offset.z, 0, offset.x).normalize()
      const orbitSpeed = 1.8 / Math.sqrt(dist)
      tangent.multiplyScalar(orbitSpeed * dt)

      nodeVel[i].add(gravity).add(tangent).multiplyScalar(0.96)

      const targetDist = orbitRadius[i]
      if (Math.abs(dist - targetDist) > 0.05) {
        offset.normalize().multiplyScalar((targetDist - dist) * 2 * dt)
        nodeVel[i].add(offset)
      }

      sphere.position.add(nodeVel[i])

      orbitPhase[i] += dt * orbitSpeed
    })

    const positions: number[] = []
    nodes.forEach((n) => {
      positions.push(cube.position.x, cube.position.y, cube.position.z)
      positions.push(n.position.x, n.position.y, n.position.z)
    })
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3))
    if (lineGeo.attributes.position) lineGeo.attributes.position.needsUpdate = true

    cube.rotation.x += 0.008
    cube.rotation.y += 0.01
  })

  return () => {
    stopLoop()
    ctx.renderer.domElement.removeEventListener("pointerdown", onDown)
    ctx.renderer.domElement.removeEventListener("pointerup", onUp)
    ctx.renderer.domElement.removeEventListener("pointermove", onMove)
    cubeGeo.dispose()
    cubeMat.dispose()
    lineGeo.dispose()
    lineMat.dispose()
    nodes.forEach((n) => {
      n.geometry.dispose()
      ;(n.material as THREE.Material).dispose()
    })
    ctx.dispose()
  }
}
