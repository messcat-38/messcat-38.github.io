import { Link, useParams } from "react-router-dom"
import { getPostBySlug } from "@/posts/registry"

export function BlogPostPage() {
  const { slug = "" } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return (
      <section className="section section-hero">
        <div className="section-inner text-center">
          <p className="text-white/80">記事が見つかりません。</p>
          <Link to="/blog" className="mt-6 inline-block text-white underline">
            Blog 一覧へ
          </Link>
        </div>
      </section>
    )
  }

  const { Content } = post
  const sheet = slug === "refactoring-proposal"

  if (sheet) {
    return (
      <article className="section section-hero !min-h-0 !justify-start pb-20 pt-24">
        <div className="section-inner max-w-7xl animate-rise">
          <div className="mb-5 flex items-center justify-between gap-4">
            <Link
              to="/blog"
              className="font-mono text-xs text-white/60 no-underline transition-colors hover:text-white hover:no-underline"
            >
              ← Blog
            </Link>
            <p className="section-label">Blog</p>
          </div>
          <Content />
        </div>
      </article>
    )
  }

  return (
    <article className="section section-hero !min-h-0 !justify-start pb-24 pt-28">
      <div className="section-inner max-w-3xl animate-rise">
        <p className="section-label">Blog</p>
        <time className="mt-4 block font-mono text-xs text-white/55" dateTime={post.date}>
          {post.date}
        </time>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-white/70 sm:text-base">{post.summary}</p>
        <div className="mt-10 rounded-lg border border-white/15 bg-black/70 p-6 backdrop-blur-sm">
          <Content />
        </div>
        <p className="mt-10">
          <Link to="/blog" className="font-mono text-sm text-white/80 underline">
            ← Blog
          </Link>
        </p>
      </div>
    </article>
  )
}
