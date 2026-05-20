import * as THREE from "three"
import type { EffectMount } from "./core/types"
import { createEffectContext, runAnimationLoop } from "./core/engine"

type Shard = {
  mesh: THREE.Mesh
  velocity: THREE.Vector3
  angular: THREE.Vector3
  life: number
}

export const mountGlassDestruction: EffectMount = (container, options) => {
  const ctx = createEffectContext(container, options)
  const grid = ctx.preview ? 4 : 8
  const voxels: THREE.Mesh[] = []
  const group = new THREE.Group()
  ctx.scene.add(group)

  const shardGroup = new THREE.Group()
  ctx.scene.add(shardGroup)
  const shards: Shard[] = []

  const voxelMat = new THREE.MeshPhysicalMaterial({
    color: 0xaeefff,
    metalness: 0,
    roughness: 0.05,
    transmission: 0.92,
    thickness: 0.5,
    transparent: true,
    opacity: 0.85,
  })

  const size = 0.35
  const offset = ((grid - 1) * size) / 2
  for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {
      for (let z = 0; z < grid; z++) {
        const geo = new THREE.BoxGeometry(size * 0.92, size * 0.92, size * 0.92)
        const mesh = new THREE.Mesh(geo, voxelMat.clone())
        mesh.position.set(x * size - offset, y * size - offset, z * size - offset)
        group.add(mesh)
        voxels.push(mesh)
      }
    }
  }

  ctx.scene.add(new THREE.AmbientLight(0xffffff, 0.65))
  const pl = new THREE.PointLight(0xffffff, 1.3)
  pl.position.set(3, 3, 5)
  ctx.scene.add(pl)
  ctx.camera.position.set(2.2, 2.2, 4.5)
  ctx.camera.lookAt(0, 0, 0)

  const localHit = new THREE.Vector3()
  const worldNormal = new THREE.Vector3()

  const spawnShards = (worldPos: THREE.Vector3, normal: THREE.Vector3, count: number) => {
    for (let i = 0; i < count; i++) {
      const shardSize = 0.04 + Math.random() * 0.08
      const geo = new THREE.TetrahedronGeometry(shardSize, 0)
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xcffafe,
        transmission: 0.85,
        roughness: 0.1,
        transparent: true,
        opacity: 0.9,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.copy(worldPos)
      shardGroup.add(mesh)

      const vel = normal
        .clone()
        .multiplyScalar(1.5 + Math.random() * 2.5)
        .add(
          new THREE.Vector3(
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2,
            (Math.random() - 0.5) * 2
          )
        )

      shards.push({
        mesh,
        velocity: vel,
        angular: new THREE.Vector3(
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 8
        ),
        life: 1.2 + Math.random() * 0.6,
      })
    }
  }

  const destroyAt = (hit: THREE.Intersection) => {
    group.updateMatrixWorld(true)
    localHit.copy(group.worldToLocal(hit.point.clone()))
    if (hit.face) {
      worldNormal.copy(hit.face.normal).transformDirection(hit.object.matrixWorld).normalize()
    } else {
      worldNormal.subVectors(hit.point, ctx.camera.position).normalize()
    }
    const worldPos = hit.point.clone()
    const radius = ctx.preview ? 0.55 : 0.85

    voxels.forEach((v) => {
      if (!v.visible) return
      if (v.position.distanceTo(localHit) < radius) {
        v.visible = false
        const wp = v.getWorldPosition(new THREE.Vector3())
        spawnShards(wp, worldNormal, ctx.preview ? 2 : 4)
      }
    })
    spawnShards(worldPos, worldNormal, ctx.preview ? 3 : 6)
  }

  const onClick = () => {
    ctx.raycaster.setFromCamera(ctx.mouse, ctx.camera)
    const visible = voxels.filter((v) => v.visible)
    const hits = ctx.raycaster.intersectObjects(visible, false)
    if (hits.length) destroyAt(hits[0])
  }

  ctx.renderer.domElement.addEventListener("click", onClick)

  const stopLoop = runAnimationLoop(ctx, (delta) => {
    group.rotation.y += 0.003
    group.rotation.x = Math.sin(ctx.clock.elapsedTime * 0.25) * 0.08

    for (let i = shards.length - 1; i >= 0; i--) {
      const s = shards[i]
      s.life -= delta
      s.velocity.y -= 4 * delta
      s.mesh.position.addScaledVector(s.velocity, delta)
      s.mesh.rotation.x += s.angular.x * delta
      s.mesh.rotation.y += s.angular.y * delta
      s.mesh.rotation.z += s.angular.z * delta
      const mat = s.mesh.material as THREE.MeshPhysicalMaterial
      mat.opacity = Math.max(0, s.life * 0.75)

      if (s.life <= 0) {
        shardGroup.remove(s.mesh)
        s.mesh.geometry.dispose()
        mat.dispose()
        shards.splice(i, 1)
      }
    }
  })

  return () => {
    stopLoop()
    ctx.renderer.domElement.removeEventListener("click", onClick)
    voxels.forEach((v) => {
      v.geometry.dispose()
      ;(v.material as THREE.Material).dispose()
    })
    shards.forEach((s) => {
      s.mesh.geometry.dispose()
      ;(s.mesh.material as THREE.Material).dispose()
    })
    ctx.dispose()
  }
}
