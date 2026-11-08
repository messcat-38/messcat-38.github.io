import { AsciiVideoBg } from "@/components/ascii-video-bg"
import { SiteHeader } from "@/components/site-header"
import { AboutSection } from "@/sections/about-section"
import { ContactSection } from "@/sections/contact-section"
import { ProductSection } from "@/sections/product-section"

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      <AsciiVideoBg />
      <SiteHeader />
      <main className="relative z-10">
        <AboutSection />
        <ProductSection />
        <ContactSection />
      </main>
    </div>
  )
}
