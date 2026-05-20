import * as THREE from "three"
import type { EffectMount } from "./core/types"
import { createEffectContext, runAnimationLoop } from "./core/engine"

export const mountParticleFluid: EffectMount = (container, options) => {
  const ctx = createEffectContext(container, options)
  const count = ctx.preview ? 500 : 2800
  const positions = new Float32Array(count * 3)
  const velocities: THREE.Vector3[] = []

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 5
    positions[i * 3 + 1] = (Math.random() - 0.5) * 3.5
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1.5
    velocities.push(new THREE.Vector3())
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))

  const mat = new THREE.PointsMaterial({
    size: ctx.preview ? 0.12 : 0.08,
    sizeAttenuation: true,
    color: 0x2563eb,
    transparent: true,
    opacity: 0.9,
    blending: THREE.NormalBlending,
    depthWrite: true,
  })

  const points = new THREE.Points(geo, mat)
  points.frustumCulled = false
  ctx.scene.add(points)
  ctx.camera.position.z = 4.5

  const attractor = new THREE.Vector3(0, 0, 0)
  const toA = new THREE.Vector3()
  const tmp = new THREE.Vector3()

  const stopLoop = runAnimationLoop(ctx, () => {
    if (ctx.mouse.x > -10) {
      attractor.copy(ctx.mouseWorld)
    }

    const pos = geo.attributes.position as THREE.BufferAttribute
    for (let i = 0; i < count; i++) {
      tmp.set(pos.getX(i), pos.getY(i), pos.getZ(i))
      toA.subVectors(attractor, tmp)
      const dist = Math.max(toA.length(), 0.12)
      toA.normalize().multiplyScalar(0.12 / (dist * dist))
      velocities[i].add(toA)
      velocities[i].multiplyScalar(0.92)
      tmp.add(velocities[i])
      if (tmp.length() > 3.5) {
        tmp.multiplyScalar(0.97)
        velocities[i].multiplyScalar(0.5)
      }
      pos.setXYZ(i, tmp.x, tmp.y, tmp.z)
    }
    pos.needsUpdate = true
  })

  return () => {
    stopLoop()
    geo.dispose()
    mat.dispose()
    ctx.dispose()
  }
}
