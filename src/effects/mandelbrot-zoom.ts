import * as THREE from "three"
import type { EffectMount } from "./core/types"
import { createEffectContext, runAnimationLoop } from "./core/engine"

const ZOOM_FACTOR = 0.5

type ZoomState = {
  center: THREE.Vector2
  scale: number
}

const mandelbrotShader = {
  uniforms: {
    u_resolution: { value: new THREE.Vector2(1, 1) },
    u_center: { value: new THREE.Vector2(-0.5, 0) },
    u_scale: { value: 2.5 },
    u_circle: { value: new THREE.Vector4(0, 0, 0, 0) },
    u_maxIter: { value: 200 },
  },
  vertexShader: `
    void main() {
      gl_Position = vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec2 u_resolution;
    uniform vec2 u_center;
    uniform float u_scale;
    uniform vec4 u_circle;
    uniform int u_maxIter;

    vec3 palette(float t) {
      return vec3(0.5) + vec3(0.5) * cos(6.28318 * (vec3(1.0, 1.0, 1.0) * t + vec3(0.0, 0.33, 0.67)));
    }

    void main() {
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution) / u_resolution.y;
      vec2 c = uv * u_scale + u_center;
      vec2 z = vec2(0.0);
      int i;
      float esc = 0.0;
      for (i = 0; i < u_maxIter; i++) {
        float x = z.x * z.x - z.y * z.y + c.x;
        float y = 2.0 * z.x * z.y + c.y;
        z = vec2(x, y);
        if (dot(z, z) > 4.0) { esc = float(i); break; }
      }
      vec3 col = vec3(0.02, 0.02, 0.06);
      if (i < u_maxIter) {
        float t = (esc + 1.0 - log(log(length(z))) / log(2.0)) / float(u_maxIter);
        col = palette(t);
      }
      if (u_circle.w > 0.0) {
        vec2 p = gl_FragCoord.xy / u_resolution;
        float d = distance(p, u_circle.xy);
        float r = u_circle.w;
        float ring = smoothstep(r + 0.002, r, d) - smoothstep(r, r - 0.003, d);
        col = mix(col, vec3(0.9, 0.95, 1.0), ring * 0.55);
      }
      gl_FragColor = vec4(col, 1.0);
    }
  `,
}

const initialCenter = new THREE.Vector2(-0.5, 0)
const initialScale = 2.5

export const mountMandelbrotZoom: EffectMount = (container, options) => {
  const ctx = createEffectContext(container, options)
  const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const mat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(mandelbrotShader.uniforms),
    vertexShader: mandelbrotShader.vertexShader,
    fragmentShader: mandelbrotShader.fragmentShader,
  })
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat)
  ctx.scene.add(mesh)

  let scale = initialScale
  const center = initialCenter.clone()
  const circle = new THREE.Vector4(0, 0, 0, 0)
  const history: ZoomState[] = [{ center: initialCenter.clone(), scale: initialScale }]

  const uniforms = mat.uniforms as typeof mandelbrotShader.uniforms

  const applyState = (state: ZoomState) => {
    center.copy(state.center)
    scale = state.scale
  }

  const focusAtPointer = () => {
    if (ctx.mouse.x < -10) return
    const w = ctx.container.clientWidth
    const h = ctx.container.clientHeight
    const aspect = w / h
    const px = (ctx.mouse.x + 1) * 0.5
    const py = (1 - ctx.mouse.y) * 0.5
    const uvX = (px - 0.5) * aspect
    const uvY = py - 0.5
    center.set(uvX * scale + center.x, uvY * scale + center.y)
  }

  const showClickCircle = () => {
    const w = ctx.container.clientWidth
    const h = ctx.container.clientHeight
    const px = (ctx.mouse.x + 1) * 0.5
    const py = (1 - ctx.mouse.y) * 0.5
    circle.set(px, py, 0, (Math.min(w, h) * 0.1) / Math.min(w, h))
  }

  const updateMouseFromEvent = (e: PointerEvent) => {
    const rect = ctx.renderer.domElement.getBoundingClientRect()
    ctx.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    ctx.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
  }

  const onPointerDown = (e: PointerEvent) => {
    updateMouseFromEvent(e)

    if (e.button === 2) {
      e.preventDefault()
      if (history.length > 1) {
        history.pop()
        applyState(history[history.length - 1])
      }
      circle.w = 0
      return
    }

    if (e.button !== 0) return

    focusAtPointer()
    scale *= ZOOM_FACTOR
    history.push({ center: center.clone(), scale })
    showClickCircle()
  }

  const onContextMenu = (e: Event) => e.preventDefault()

  ctx.renderer.domElement.addEventListener("pointerdown", onPointerDown)
  ctx.renderer.domElement.addEventListener("contextmenu", onContextMenu)

  const stopLoop = runAnimationLoop(
    ctx,
    () => {
      const w = ctx.container.clientWidth
      const h = ctx.container.clientHeight
      uniforms.u_resolution.value.set(w, h)
      uniforms.u_center.value.copy(center)
      uniforms.u_scale.value = scale
      uniforms.u_circle.value.copy(circle)
      uniforms.u_maxIter.value = ctx.preview
        ? 80
        : Math.min(320, Math.floor(120 - Math.log10(scale) * 25))
    },
    { camera: ortho }
  )

  return () => {
    stopLoop()
    ctx.renderer.domElement.removeEventListener("pointerdown", onPointerDown)
    ctx.renderer.domElement.removeEventListener("contextmenu", onContextMenu)
    mesh.geometry.dispose()
    mat.dispose()
    ctx.dispose()
  }
}
