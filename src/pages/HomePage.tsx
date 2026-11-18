import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { AboutSection } from "@/sections/about-section"
import { ContactSection } from "@/sections/contact-section"

export function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash !== "#contact") return
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView()
    })
  }, [hash])

  return (
    <>
      <AboutSection />
      <ContactSection />
    </>
  )
}
