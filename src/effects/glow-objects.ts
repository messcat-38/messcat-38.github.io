import * as THREE from "three"
import type { EffectMount } from "./core/types"
import { createEffectContext, runAnimationLoop } from "./core/engine"

export const mountGlowObjects: EffectMount = (container, options) => {
  const ctx = createEffectContext(container, options)
  const meshes: THREE.Mesh[] = []
  const baseEmissive: number[] = []

  const geometries = [
    new THREE.IcosahedronGeometry(0.55, 1),
    new THREE.TorusGeometry(0.45, 0.15, 12, 32),
    new THREE.BoxGeometry(0.7, 0.7, 0.7),
    new THREE.OctahedronGeometry(0.5, 0),
  ]

  const count = ctx.preview ? 3 : geometries.length
  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color().setHSL(i * 0.15 + 0.55, 0.6, 0.45),
      emissive: 0x000000,
      emissiveIntensity: 0,
      metalness: 0.4,
      roughness: 0.35,
    })
    const mesh = new THREE.Mesh(geometries[i % geometries.length], mat)
    mesh.position.set((i - 1.5) * 1.2, Math.sin(i) * 0.3, 0)
    ctx.scene.add(mesh)
    meshes.push(mesh)
    baseEmissive.push(0)
  }

  const light = new THREE.PointLight(0xffffff, 1.2)
  light.position.set(2, 2, 4)
  ctx.scene.add(light)
  ctx.scene.add(new THREE.AmbientLight(0xffffff, 0.35))

  let hovered: THREE.Mesh | null = null

  const stopLoop = runAnimationLoop(ctx, () => {
    ctx.raycaster.setFromCamera(ctx.mouse, ctx.camera)
    const hits = ctx.raycaster.intersectObjects(meshes)
    const next = hits[0]?.object as THREE.Mesh | undefined

    meshes.forEach((m, i) => {
      const mat = m.material as THREE.MeshStandardMaterial
      const isHover = m === next
      const target = isHover ? 1.8 : baseEmissive[i]
      mat.emissiveIntensity += (target - mat.emissiveIntensity) * 0.12
      if (isHover) {
        mat.emissive.setHSL(0.58, 0.9, 0.55)
        m.scale.lerp(new THREE.Vector3(1.12, 1.12, 1.12), 0.15)
      } else {
        mat.emissive.setHex(0x000000)
        m.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1)
      }
      m.rotation.x += 0.004
      m.rotation.y += 0.006
    })
    hovered = next ?? null
    void hovered
  })

  return () => {
    stopLoop()
    geometries.forEach((g) => g.dispose())
    meshes.forEach((m) => {
      ;(m.material as THREE.Material).dispose()
    })
    ctx.dispose()
  }
}
