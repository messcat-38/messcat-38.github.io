import { site } from "@/content"

export function ContactSection() {
  return (
    <section id="contact" className="section section-contact">
      <div className="section-inner">
        <p className="section-label">Contact</p>

        <h2 className="section-title section-title-sm">GitHub</h2>
        <a
          href={site.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block font-mono text-sm text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white sm:text-base"
        >
          {site.githubLabel}
        </a>

        <h3 className="mt-10 font-display text-xl font-semibold tracking-tight sm:text-2xl">
          {site.bitcoinLabel}
        </h3>
        <p className="mt-4 select-all break-all font-mono text-sm text-white/80 sm:text-base">
          {site.bitcoinAddress}
        </p>

        <h3 className="mt-10 font-display text-xl font-semibold tracking-tight sm:text-2xl">
          {site.protonWalletLabel}
        </h3>
        <p className="mt-4 select-all font-mono text-sm text-white/80 sm:text-base">
          {site.protonWalletEmail}
        </p>
      </div>
    </section>
  )
}
