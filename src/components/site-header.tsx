import { navLinks, site } from "@/content"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a
          href="#about"
          className="font-display text-lg tracking-wide text-white no-underline transition-opacity hover:opacity-80 hover:no-underline md:text-xl"
        >
          {site.name}
        </a>
        <nav className="flex items-center gap-5 md:gap-8" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/75 no-underline transition-colors hover:text-white hover:no-underline md:text-xs"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
