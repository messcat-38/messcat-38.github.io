import { Link, Navigate, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { getPostBySlug } from "@/content/posts"
import { getEffectBySlug } from "@/effects/registry"
import { EffectCanvas } from "@/components/effects/effect-canvas"
import { Badge } from "@/components/ui/badge"

const legacyMap: Record<string, string> = {
  julia: "mandelbrot-zoom",
  pendulum: "drag-cube-lines",
  geometric: "warp-grid",
  "パターン": "particle-fluid",
  pattern: "particle-fluid",
  "mental-space": "seed-tree",
}

export function PostPage() {
  const { slug = "" } = useParams()
  const legacy = legacyMap[slug]
  if (legacy) {
    return <Navigate to={`/posts/${legacy}`} replace />
  }
  const post = getPostBySlug(slug)
  const effect = getEffectBySlug(slug)

  if (!post || !effect) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <p>記事が見つかりません。</p>
        <Link to="/posts" className="mt-4 inline-block">
          記事一覧へ
        </Link>
      </section>
    )
  }

  return (
    <>
      <Helmet>
        <title>
          {post.titleJa} · mess cat
        </title>
        <meta name="description" content={post.description} />
      </Helmet>
      <article className="mx-auto max-w-4xl px-4 py-12">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">{post.titleJa}</h1>
          <p className="text-muted-foreground mt-2 text-sm">{post.date}</p>
          <div className="mt-3 flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </header>
        <EffectCanvas mount={effect.mount} className="min-h-[480px] rounded-xl border border-border" />
      </article>
    </>
  )
}
