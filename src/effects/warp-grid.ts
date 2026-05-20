import * as THREE from "three"
import type { EffectMount } from "./core/types"
import { createEffectContext, runAnimationLoop } from "./core/engine"

export const mountWarpGrid: EffectMount = (container, options) => {
  const ctx = createEffectContext(container, options)
  const segments = ctx.preview ? 24 : 48
  const geo = new THREE.PlaneGeometry(6, 4, segments, segments)
  const mat = new THREE.MeshStandardMaterial({
    color: 0x334155,
    wireframe: true,
    emissive: 0x1e3a5f,
    emissiveIntensity: 0.3,
  })
  const mesh = new THREE.Mesh(geo, mat)
  mesh.rotation.x = -Math.PI / 2.5
  ctx.scene.add(mesh)
  ctx.camera.position.set(0, 2.5, 4)
  ctx.camera.lookAt(0, 0, 0)

  const base = new Float32Array(geo.attributes.position.array as ArrayLike<number>)

  const stopLoop = runAnimationLoop(ctx, () => {
    const pos = geo.attributes.position
    const mx = ctx.mouseWorld.x
    const my = ctx.mouseWorld.y
    for (let i = 0; i < pos.count; i++) {
      const ix = i * 3
      const x = base[ix]
      const y = base[ix + 1]
      const z = base[ix + 2]
      const dx = x - mx
      const dy = y - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      const pull = Math.exp(-dist * dist * 2) * 0.6
      pos.setXYZ(i, x + dx * pull * -0.3, y + dy * pull * -0.3, z + pull * 0.5)
    }
    pos.needsUpdate = true
    geo.computeVertexNormals()
  })

  return () => {
    stopLoop()
    geo.dispose()
    mat.dispose()
    ctx.dispose()
  }
}
