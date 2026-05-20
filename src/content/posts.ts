import { effects } from "@/effects/registry"

export type Post = {
  slug: string
  title: string
  titleJa: string
  date: string
  description: string
  tags: string[]
  body: string
  effectSlug: string
}

export const posts: Post[] = effects.map((e, i) => ({
  slug: e.slug,
  title: e.title,
  titleJa: e.titleJa,
  date: `2025-08-${String(10 + i).padStart(2, "0")}`,
  description: e.description,
  tags: e.tags,
  effectSlug: e.slug,
  body: getPostBody(e.slug),
}))

function getPostBody(slug: string): string {
  const bodies: Record<string, string> = {
    "glow-objects":
      "複数の3Dオブジェクトにマウスを乗せると、輪郭が発光します。Raycaster でホバー対象を検出し、emissive を補間しています。",
    "drag-cube-lines":
      "青いキューブをドラッグして動かすと、ランダムなサイズの球体との間に線が引かれます。",
    "particle-fluid":
      "数千のパーティクルがマウス位置に引き寄せられ、流体のように渦を描きます。",
    "mandelbrot-zoom":
      "画面をクリックすると直径約10%の円が表示され、その中心へマンデルブロ集合が連続ズームします。",
    "warp-grid":
      "グリッド平面の頂点がマウス位置に引き寄せられ、空間が歪みます。",
    "glass-destruction":
      "ガラス質感のボクセルキューブをクリックすると、周辺のブロックが削られていきます。",
    "black-hole-grid":
      "背景グリッドがマウス位置を中心にレンズ状に曲げられ、ブラックホールのような見え方になります。",
    "seed-tree":
      "地面をクリックすると種が落ち、時間とともにランダムな角度・長さで枝分かれしながら木が育ちます。何度でも種を撒けます。",
  }
  return bodies[slug] ?? ""
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
