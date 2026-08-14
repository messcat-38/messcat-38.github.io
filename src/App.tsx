import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SiteNav } from "@/components/layout/site-nav"
import { SiteFooter } from "@/components/layout/site-footer"
import { HomePage } from "@/pages/HomePage"
import { PostsPage } from "@/pages/PostsPage"
import { PostPage } from "@/pages/PostPage"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:slug" element={<PostPage />} />
            <Route path="/tags/*" element={<Navigate to="/posts" replace />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </BrowserRouter>
  )
}
