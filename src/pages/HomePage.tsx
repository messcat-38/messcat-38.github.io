import { Helmet } from "react-helmet-async"
import { AboutSection } from "@/components/about/about-section"
import { EffectGrid } from "@/components/effects/effect-grid"

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>mess cat</title>
        <meta name="description" content="ポートフォリオ。ブログとか。" />
      </Helmet>
      <AboutSection />
      <EffectGrid />
    </>
  )
}
