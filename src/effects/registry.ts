import type { EffectEntry } from "./core/types"
import { mountGlowObjects } from "./glow-objects"
import { mountDragCubeLines } from "./drag-cube-lines"
import { mountParticleFluid } from "./particle-fluid"
import { mountMandelbrotZoom } from "./mandelbrot-zoom"
import { mountWarpGrid } from "./warp-grid"
import { mountGlassDestruction } from "./glass-destruction"
import { mountBlackHoleGrid } from "./black-hole-grid"
import { mountSeedTree } from "./seed-tree"

export const effects: EffectEntry[] = [
  {
    slug: "glow-objects",
    title: "Glow Objects",
    titleJa: "光る輪郭",
    description: "ホバーで輪郭が光る3Dオブジェクト群。",
    tags: ["Three.js", "Interaction"],
    mount: mountGlowObjects,
  },
  {
    slug: "drag-cube-lines",
    title: "Drag Cube Lines",
    titleJa: "ドラッグキューブ",
    description: "ドラッグできる3Dキューブとランダムな点を線で結ぶ。",
    tags: ["Three.js", "Physics"],
    mount: mountDragCubeLines,
  },
  {
    slug: "particle-fluid",
    title: "Particle Fluid",
    titleJa: "パーティクル流体",
    description: "マウス追従パーティクル流体。",
    tags: ["Three.js", "Particles"],
    mount: mountParticleFluid,
  },
  {
    slug: "mandelbrot-zoom",
    title: "Mandelbrot Zoom",
    titleJa: "マンデルブロズーム",
    description: "クリックで画面10%の円からマンデルブロ集合へ連続ズーム。",
    tags: ["Three.js", "Fractals"],
    mount: mountMandelbrotZoom,
  },
  {
    slug: "warp-grid",
    title: "Warp Grid",
    titleJa: "歪むグリッド",
    description: "マウスで歪むグリッド空間。",
    tags: ["Three.js", "Shader"],
    mount: mountWarpGrid,
  },
  {
    slug: "glass-destruction",
    title: "Glass Destruction",
    titleJa: "ガラス破壊",
    description: "クリックで削っていくガラスのキューブ。",
    tags: ["Three.js", "Material"],
    mount: mountGlassDestruction,
  },
  {
    slug: "black-hole-grid",
    title: "Black Hole Grid",
    titleJa: "ブラックホール",
    description: "マウスで空間を曲げる。背景はグリッド。",
    tags: ["Three.js", "Gravity"],
    mount: mountBlackHoleGrid,
  },
  {
    slug: "seed-tree",
    title: "Seed Tree",
    titleJa: "種と木",
    description: "クリックで種を撒くと、ランダムな分岐で木が育つ。",
    tags: ["Three.js", "Generative"],
    mount: mountSeedTree,
    featured: true,
  },
]

export function getEffectBySlug(slug: string): EffectEntry | undefined {
  return effects.find((e) => e.slug === slug)
}
