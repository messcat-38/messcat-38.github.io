import { site } from "@/content"

export function AboutSection() {
  return (
    <section id="about" className="section section-hero">
      <div className="section-inner animate-rise">
        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {site.name}
        </h1>
        <p className="mt-5 font-mono text-sm uppercase tracking-[0.22em] text-white/80 sm:text-base">
          {site.tagline}
        </p>
        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-white/70 sm:text-lg">
          {site.blurb}
        </p>
      </div>
    </section>
  )
}
