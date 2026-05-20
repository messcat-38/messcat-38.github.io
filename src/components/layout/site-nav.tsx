import { Link, NavLink } from "react-router-dom"
import { Menu } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function SiteNav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="text-lg font-semibold no-underline hover:no-underline">
          mess cat
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-4 sm:flex">
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                cn("text-sm no-underline hover:underline", isActive && "font-semibold")
              }
            >
              Blog
            </NavLink>
          </nav>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label="メニュー"
            onClick={() => setOpen(!open)}
          >
            <Menu className="size-4" />
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border px-4 py-3 sm:hidden">
          <NavLink to="/posts" className="text-sm" onClick={() => setOpen(false)}>
            Blog
          </NavLink>
        </nav>
      )}
    </header>
  )
}
