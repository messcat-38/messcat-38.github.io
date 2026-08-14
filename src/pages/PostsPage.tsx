import { Helmet } from "react-helmet-async"

export function PostsPage() {
  return (
    <>
      <Helmet>
        <title>記事 · mess cat</title>
      </Helmet>
      <section className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="mb-8 text-2xl font-bold">記事</h1>
        <ul className="flex flex-col gap-6" />
      </section>
    </>
  )
}
