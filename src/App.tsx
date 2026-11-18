import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { AsciiVideoBg } from "@/components/ascii-video-bg"
import { SiteHeader } from "@/components/site-header"
import { BlogPage } from "@/pages/BlogPage"
import { BlogPostPage } from "@/pages/BlogPostPage"
import { HomePage } from "@/pages/HomePage"
import { ProductPage } from "@/pages/ProductPage"

export default function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-white">
        <AsciiVideoBg />
        <SiteHeader />
        <main className="relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
