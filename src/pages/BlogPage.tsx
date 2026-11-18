import { Link } from "react-router-dom"
import { posts } from "@/posts/registry"

export function BlogPage() {
  return (
    <section className="section section-hero">
      <div className="section-inner animate-rise">
        <p className="section-label">Blog</p>
        <h1 className="section-title">Articles</h1>
        <ul className="mt-10 flex max-w-2xl flex-col gap-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                to={`/blog/${post.slug}`}
                className="block rounded-lg border border-white/15 bg-black/60 p-5 no-underline backdrop-blur-sm transition-colors hover:border-white/35 hover:no-underline"
              >
                <time className="font-mono text-xs text-white/55" dateTime={post.date}>
                  {post.date}
                </time>
                <h2 className="mt-2 font-display text-xl font-semibold text-white">
                  {post.title}
                </h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
