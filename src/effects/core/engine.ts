import * as THREE from "three"

export type EffectContext = {
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  renderer: THREE.WebGLRenderer
  container: HTMLElement
  preview: boolean
  mouse: THREE.Vector2
  mouseWorld: THREE.Vector3
  raycaster: THREE.Raycaster
  clock: THREE.Clock
  dispose: () => void
}

export function createEffectContext(
  container: HTMLElement,
  options?: { preview?: boolean; fov?: number }
): EffectContext {
  const preview = options?.preview ?? false
  const width = container.clientWidth || 300
  const height = container.clientHeight || 200

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(options?.fov ?? 50, width / height, 0.1, 100)
  camera.position.z = 5

  const renderer = new THREE.WebGLRenderer({
    antialias: !preview,
    alpha: true,
    powerPreference: preview ? "low-power" : "high-performance",
  })
  renderer.setPixelRatio(preview ? 1 : Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  container.innerHTML = ""
  container.appendChild(renderer.domElement)
  renderer.domElement.style.display = "block"
  renderer.domElement.style.width = "100%"
  renderer.domElement.style.height = "100%"
  renderer.domElement.style.touchAction = "none"

  const mouse = new THREE.Vector2(-999, -999)
  const mouseWorld = new THREE.Vector3()
  const raycaster = new THREE.Raycaster()
  const clock = new THREE.Clock()

  const updateMouse = (clientX: number, clientY: number) => {
    const rect = renderer.domElement.getBoundingClientRect()
    mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1
    mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
    raycaster.ray.intersectPlane(plane, mouseWorld)
  }

  const onPointerMove = (e: PointerEvent) => updateMouse(e.clientX, e.clientY)
  const onPointerDown = (e: PointerEvent) => updateMouse(e.clientX, e.clientY)

  renderer.domElement.addEventListener("pointermove", onPointerMove)
  renderer.domElement.addEventListener("pointerdown", onPointerDown)

  const resizeObserver = new ResizeObserver(() => {
    const w = container.clientWidth
    const h = container.clientHeight
    if (w === 0 || h === 0) return
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  })
  resizeObserver.observe(container)

  const isDark = () => document.documentElement.classList.contains("dark")

  const applyThemeBg = () => {
    const dark = isDark()
    scene.background = new THREE.Color(dark ? 0x0f1117 : 0xf5f7fb)
  }
  applyThemeBg()

  const themeObserver = new MutationObserver(applyThemeBg)
  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  })

  const dispose = () => {
    resizeObserver.disconnect()
    themeObserver.disconnect()
    renderer.domElement.removeEventListener("pointermove", onPointerMove)
    renderer.domElement.removeEventListener("pointerdown", onPointerDown)
    renderer.dispose()
    container.innerHTML = ""
  }

  return {
    scene,
    camera,
    renderer,
    container,
    preview,
    mouse,
    mouseWorld,
    raycaster,
    clock,
    dispose,
  }
}

export function runAnimationLoop(
  ctx: EffectContext,
  update: (delta: number) => void,
  options?: { paused?: () => boolean; camera?: THREE.Camera }
): () => void {
  let frame = 0
  let running = true

  const observer = new IntersectionObserver(
    (entries) => {
      running = entries[0]?.isIntersecting ?? true
    },
    { threshold: 0.05 }
  )
  observer.observe(ctx.container)

  const loop = () => {
    frame = requestAnimationFrame(loop)
    if (!running || options?.paused?.()) return
    const delta = ctx.clock.getDelta()
    update(delta)
    ctx.renderer.render(ctx.scene, options?.camera ?? ctx.camera)
  }
  loop()

  return () => {
    cancelAnimationFrame(frame)
    observer.disconnect()
  }
}
