import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react"
import { createPortal } from "react-dom"
import {
  REFACTORING_CATEGORIES,
  refactoringItems,
  type RefactoringCategory,
} from "./refactoring-items"
import { RefactoringDiagram } from "./refactoring-diagram"

type CategoryFilter = RefactoringCategory | "all"

type ToastState = {
  text: string
  x: number
  y: number
  visible: boolean
}

function padId(id: number) {
  return String(id).padStart(2, "0")
}

export function RefactoringProposalContent() {
  const [category, setCategory] = useState<CategoryFilter>("code-smell")
  const [toast, setToast] = useState<ToastState>({
    text: "",
    x: 0,
    y: 0,
    visible: false,
  })
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activeMeta = REFACTORING_CATEGORIES.find((c) => c.id === category)

  const filtered = useMemo(() => {
    if (category === "all") return refactoringItems
    return refactoringItems.filter((item) => item.category === category)
  }, [category])

  useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current)
    }
  }, [])

  async function copyPrompt(
    prompt: string,
    event: MouseEvent<HTMLButtonElement>
  ) {
    // Capture before await — coords are viewport; toast portals to body.
    const pad = 12
    const gap = 14
    let x = event.clientX
    let y = event.clientY - gap
    x = Math.max(pad, Math.min(window.innerWidth - pad, x))
    y = Math.max(pad + 8, Math.min(window.innerHeight - pad, y))

    try {
      await navigator.clipboard.writeText(prompt)
      setToast({ text: prompt, x, y, visible: true })
      if (toastTimer.current) clearTimeout(toastTimer.current)
      toastTimer.current = setTimeout(() => {
        setToast((t) => ({ ...t, visible: false }))
      }, 1800)
    } catch {
      /* clipboard may be blocked */
    }
  }

  const toastNode = (
    <div
      role="status"
      aria-live="polite"
      className={[
        "pointer-events-none fixed z-50 max-w-[min(20rem,calc(100vw-1.5rem))] -translate-x-1/2 -translate-y-full rounded-2xl border border-white/20 bg-[#1a1d2a]/95 px-3.5 py-2 text-left text-[11px] leading-snug text-white/90 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-opacity duration-200 ease-out",
        toast.visible ? "opacity-100" : "opacity-0",
      ].join(" ")}
      style={{ left: toast.x, top: toast.y }}
    >
      <p className="line-clamp-3 whitespace-pre-wrap">{toast.text}</p>
      <span
        className="absolute left-1/2 top-full -mt-px h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r border-white/20 bg-[#1a1d2a]/95"
        aria-hidden
      />
    </div>
  )

  return (
    <div className="space-y-5">
      <header className="overflow-hidden rounded-xl border border-[#7b89d4]/35 bg-gradient-to-r from-[#3d4a7a]/90 via-[#4a5690]/80 to-[#3d4a7a]/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-end sm:justify-between sm:px-5 sm:py-5">
          <h2 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
            Refactoring proposal
          </h2>
          <div className="shrink-0 text-left font-mono text-[11px] tracking-wide text-white/60 sm:text-right">
            {activeMeta?.page ? <div>{activeMeta.page}</div> : null}
            <div>{activeMeta?.range ?? `${filtered.length} / 100`}</div>
          </div>
        </div>
      </header>

      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Categories"
      >
        {REFACTORING_CATEGORIES.map((cat) => {
          const active = category === cat.id
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setCategory(cat.id)}
              className={[
                "rounded-full border px-3 py-1.5 font-mono text-[11px] tracking-[0.08em] transition-colors",
                active
                  ? "border-[#9aa6e8]/70 bg-[#7b89d4]/35 text-white"
                  : "border-white/15 text-white/60 hover:border-white/30 hover:text-white",
              ].join(" ")}
            >
              {cat.label}
            </button>
          )
        })}
      </div>

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filtered.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={(e) => void copyPrompt(item.prompt, e)}
              className="group flex h-full w-full flex-col rounded-xl border border-white/12 bg-[#0d0f16]/90 p-3 text-left shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-colors hover:border-[#7b89d4]/45 hover:bg-[#12151f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7b89d4]/70"
            >
              <div className="flex items-start gap-2">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#5c6bb8] font-mono text-[11px] font-medium text-white">
                  {padId(item.id)}
                </span>
                <h3 className="pt-0.5 font-display text-[13px] font-semibold leading-snug tracking-tight text-[#e8eaf6]">
                  {item.title}
                </h3>
              </div>

              <div className="mt-2.5">
                <RefactoringDiagram id={item.id} category={item.category} />
              </div>

              <p className="mt-2.5 text-[11px] leading-snug text-white/55">
                {item.description}
              </p>

              <p className="mt-auto pt-2.5 text-[11px] leading-snug text-[#9eb0ff]">
                <span className="block rounded-md bg-[#7b89d4]/15 px-2 py-1.5">
                  「{item.prompt}」
                </span>
              </p>
            </button>
          </li>
        ))}
      </ul>

      {createPortal(toastNode, document.body)}
    </div>
  )
}
