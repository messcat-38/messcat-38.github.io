import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { posts } from "@/content/posts"
import { Badge } from "@/components/ui/badge"

export function PostsPage() {
  return (
    <>
      <Helmet>
        <title>記事 · mess cat</title>
      </Helmet>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-2xl font-bold">記事</h1>
        <ul className="flex flex-col gap-6">
          {[...posts].reverse().map((post) => (
            <li key={post.slug} className="border-b border-border pb-6">
              <span className="text-muted-foreground text-sm">{post.date}</span>
              <Link to={`/posts/${post.slug}`} className="mt-1 block text-lg font-medium">
                {post.titleJa}
              </Link>
              <div className="mt-2 flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
