import * as THREE from "three"
import type { EffectMount } from "./core/types"
import { createEffectContext, runAnimationLoop } from "./core/engine"

const shader = {
  uniforms: {
    u_resolution: { value: new THREE.Vector2(1, 1) },
    u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
    u_strength: { value: 0.35 },
  },
  vertexShader: `void main() { gl_Position = vec4(position, 1.0); }`,
  fragmentShader: `
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform float u_strength;

    float grid(vec2 uv, float scale) {
      vec2 g = abs(fract(uv * scale - 0.5) - 0.5) / fwidth(uv * scale);
      return 1.0 - min(min(g.x, g.y), 1.0);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      vec2 m = u_mouse;
      vec2 d = uv - m;
      float r = length(d) + 0.001;
      float lens = u_strength / (r * r + 0.02);
      vec2 warped = uv - normalize(d) * lens * 0.08;
      float g = grid(warped, 20.0) * 0.35 + grid(warped, 5.0) * 0.15;
      vec3 col = vec3(0.04, 0.06, 0.12) + vec3(0.2, 0.45, 0.9) * g;
      float hole = smoothstep(0.08, 0.0, r);
      col *= 1.0 - hole * 0.85;
      gl_FragColor = vec4(col, 1.0);
    }
  `,
}

export const mountBlackHoleGrid: EffectMount = (container, options) => {
  const ctx = createEffectContext(container, options)
  const ortho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)
  const mat = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.clone(shader.uniforms),
    vertexShader: shader.vertexShader,
    fragmentShader: shader.fragmentShader,
  })
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat)
  ctx.scene.add(mesh)

  const uniforms = mat.uniforms as typeof shader.uniforms
  const renderCam = ortho

  const stopLoop = runAnimationLoop(ctx, () => {
    const w = ctx.container.clientWidth
    const h = ctx.container.clientHeight
    uniforms.u_resolution.value.set(w, h)
    const px = (ctx.mouse.x + 1) * 0.5
    const py = (1 - ctx.mouse.y) * 0.5
    if (ctx.mouse.x > -10) {
      uniforms.u_mouse.value.set(px, py)
    }
    uniforms.u_strength.value = ctx.preview ? 0.2 : 0.4
  }, { camera: renderCam })

  return () => {
    stopLoop()
    mesh.geometry.dispose()
    mat.dispose()
    ctx.dispose()
  }
}
