import { Link, NavLink } from "react-router-dom"
import { navLinks, site } from "@/content"

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link
          to="/"
          className="font-display text-lg tracking-wide text-white no-underline transition-opacity hover:opacity-80 hover:no-underline md:text-xl"
        >
          {site.name}
        </Link>
        <nav className="flex items-center gap-5 md:gap-8" aria-label="Primary">
          {navLinks.map((link) =>
            link.to.includes("#") ? (
              <a
                key={link.to}
                href={link.to}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/75 no-underline transition-colors hover:text-white hover:no-underline md:text-xs"
              >
                {link.label}
              </a>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={"end" in link ? link.end : false}
                className={({ isActive }) =>
                  [
                    "font-mono text-[11px] uppercase tracking-[0.18em] no-underline transition-colors hover:no-underline md:text-xs",
                    isActive ? "text-white" : "text-white/75 hover:text-white",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </header>
  )
}
