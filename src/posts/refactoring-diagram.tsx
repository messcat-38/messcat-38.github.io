import { ArrowRight, X } from "lucide-react"
import type { RefactoringCategory } from "./refactoring-items"

/** Mini before→after panels matching the print sheet vocabulary. */
type Kind =
  | "tall-split"
  | "dup-merge"
  | "rename"
  | "unnest"
  | "magic-const"
  | "class-split"
  | "params"
  | "dead-x"
  | "scatter"
  | "spaghetti"
  | "global"
  | "chain"
  | "switch"
  | "extract-fn"
  | "inline-fn"
  | "param-obj"
  | "phase"
  | "pull-up"
  | "guard"
  | "split-loop"
  | "pipeline"
  | "lookup"
  | "state"
  | "shield-test"
  | "steps"
  | "layers"
  | "dry"
  | "kiss"
  | "yagni"
  | "coverage"
  | "strangle"
  | "ocp"

const KIND_BY_ID: Record<number, Kind> = {
  1: "tall-split",
  2: "dup-merge",
  3: "rename",
  4: "unnest",
  5: "magic-const",
  6: "class-split",
  7: "params",
  8: "dead-x",
  9: "scatter",
  10: "scatter",
  11: "spaghetti",
  12: "global",
  13: "chain",
  14: "param-obj",
  15: "magic-const",
  16: "switch",
  17: "params",
  18: "chain",
  19: "chain",
  20: "yagni",
  21: "dry",
  22: "class-split",
  23: "pull-up",
  24: "pull-up",
  25: "scatter",
  26: "extract-fn",
  27: "rename",
  28: "rename",
  29: "extract-fn",
  30: "class-split",
  31: "inline-fn",
  32: "params",
  33: "param-obj",
  34: "tall-split",
  35: "tall-split",
  36: "extract-fn",
  37: "phase",
  38: "class-split",
  39: "inline-fn",
  40: "kiss",
  41: "phase",
  42: "dry",
  43: "chain",
  44: "inline-fn",
  45: "inline-fn",
  46: "extract-fn",
  47: "shield-test",
  48: "pull-up",
  49: "pull-up",
  50: "dry",
  51: "guard",
  52: "unnest",
  53: "dry",
  54: "switch",
  55: "split-loop",
  56: "guard",
  57: "shield-test",
  58: "guard",
  59: "pipeline",
  60: "lookup",
  61: "switch",
  62: "shield-test",
  63: "kiss",
  64: "unnest",
  65: "chain",
  66: "guard",
  67: "magic-const",
  68: "state",
  69: "switch",
  70: "pipeline",
  71: "dead-x",
  72: "phase",
  73: "state",
  74: "lookup",
  75: "rename",
  76: "shield-test",
  77: "steps",
  78: "shield-test",
  79: "layers",
  80: "dry",
  81: "kiss",
  82: "yagni",
  83: "layers",
  84: "steps",
  85: "shield-test",
  86: "dead-x",
  87: "phase",
  88: "unnest",
  89: "unnest",
  90: "coverage",
  91: "rename",
  92: "chain",
  93: "param-obj",
  94: "pipeline",
  95: "shield-test",
  96: "strangle",
  97: "rename",
  98: "switch",
  99: "dup-merge",
  100: "ocp",
}

const FALLBACK: Record<RefactoringCategory, Kind> = {
  "code-smell": "tall-split",
  "function-class": "extract-fn",
  "control-flow": "guard",
  "safe-refactor": "shield-test",
}

function Chip({
  className = "",
  tall,
}: {
  className?: string
  tall?: boolean
}) {
  return (
    <span
      className={[
        "inline-block rounded-[3px] border",
        tall ? "h-10 w-3.5" : "h-3.5 w-6",
        className,
      ].join(" ")}
    />
  )
}

function Arrow() {
  return <ArrowRight className="size-3 shrink-0 text-rose-400/90" strokeWidth={2.25} aria-hidden />
}

function DiagramBody({ kind }: { kind: Kind }) {
  switch (kind) {
    case "tall-split":
      return (
        <>
          <Chip tall className="border-sky-400/50 bg-sky-400/25" />
          <Arrow />
          <span className="flex flex-col gap-0.5">
            <Chip className="border-emerald-400/50 bg-emerald-400/25" />
            <Chip className="border-emerald-400/50 bg-emerald-400/25" />
            <Chip className="border-emerald-400/50 bg-emerald-400/25" />
          </span>
        </>
      )
    case "dup-merge":
      return (
        <>
          <span className="flex flex-col gap-0.5">
            <Chip className="border-sky-400/50 bg-sky-400/25" />
            <Chip className="border-amber-400/50 bg-amber-400/25" />
          </span>
          <Arrow />
          <Chip className="h-7 w-7 border-emerald-400/50 bg-emerald-400/25" />
        </>
      )
    case "rename":
      return (
        <>
          <span className="rounded-[3px] border border-white/25 bg-white/10 px-1.5 py-0.5 font-mono text-[9px] text-white/55">
            tmp
          </span>
          <Arrow />
          <span className="rounded-[3px] border border-sky-400/45 bg-sky-400/20 px-1.5 py-0.5 font-mono text-[9px] text-sky-100/90">
            name
          </span>
        </>
      )
    case "unnest":
      return (
        <>
          <span className="flex flex-col items-start gap-0.5">
            <span className="h-1 w-8 rounded-sm bg-rose-400/70" />
            <span className="ml-1.5 h-1 w-7 rounded-sm bg-rose-400/55" />
            <span className="ml-3 h-1 w-6 rounded-sm bg-rose-400/40" />
            <span className="ml-4 h-1 w-5 rounded-sm bg-rose-400/30" />
          </span>
          <Arrow />
          <span className="flex flex-col gap-0.5">
            <span className="h-1 w-8 rounded-sm bg-emerald-400/70" />
            <span className="h-1 w-8 rounded-sm bg-emerald-400/55" />
            <span className="h-1 w-8 rounded-sm bg-emerald-400/40" />
          </span>
        </>
      )
    case "magic-const":
      return (
        <>
          <span className="font-mono text-[11px] text-amber-200/80">42</span>
          <Arrow />
          <span className="rounded-[3px] border border-sky-400/45 bg-sky-400/20 px-1.5 py-0.5 font-mono text-[9px] text-sky-100/90">
            MAX
          </span>
        </>
      )
    case "class-split":
      return (
        <>
          <span className="flex h-9 w-8 flex-col overflow-hidden rounded-[3px] border border-white/25">
            <span className="flex-1 bg-sky-400/35" />
            <span className="flex-1 bg-amber-400/35" />
          </span>
          <Arrow />
          <span className="flex gap-1">
            <Chip tall className="border-sky-400/50 bg-sky-400/25" />
            <Chip tall className="border-amber-400/50 bg-amber-400/25" />
          </span>
        </>
      )
    case "params":
      return (
        <>
          <span className="flex gap-0.5">
            <Chip className="w-2.5 border-white/30 bg-white/15" />
            <Chip className="w-2.5 border-white/30 bg-white/15" />
            <Chip className="w-2.5 border-white/30 bg-white/15" />
            <Chip className="w-2.5 border-white/30 bg-white/15" />
          </span>
          <Arrow />
          <Chip className="w-8 border-emerald-400/50 bg-emerald-400/25" />
        </>
      )
    case "dead-x":
      return (
        <span className="relative">
          <Chip className="h-8 w-10 border-white/20 bg-white/10 opacity-50" />
          <X className="absolute inset-0 m-auto size-5 text-rose-400" strokeWidth={2.5} aria-hidden />
        </span>
      )
    case "scatter":
      return (
        <>
          <span className="grid grid-cols-2 gap-0.5">
            <Chip className="w-4 border-rose-400/40 bg-rose-400/20" />
            <Chip className="w-4 border-rose-400/40 bg-rose-400/20" />
            <Chip className="w-4 border-rose-400/40 bg-rose-400/20" />
            <Chip className="w-4 border-rose-400/40 bg-rose-400/20" />
          </span>
          <Arrow />
          <Chip className="h-8 w-8 border-emerald-400/50 bg-emerald-400/25" />
        </>
      )
    case "spaghetti":
      return (
        <>
          <span className="relative h-8 w-8">
            <span className="absolute left-1 top-1 h-6 w-0.5 rotate-45 bg-rose-400/70" />
            <span className="absolute right-2 top-0 h-7 w-0.5 -rotate-12 bg-amber-400/70" />
            <span className="absolute bottom-1 left-0 h-0.5 w-7 rotate-6 bg-sky-400/70" />
          </span>
          <Arrow />
          <span className="flex flex-col gap-1">
            <span className="h-0.5 w-7 bg-emerald-400/80" />
            <span className="h-0.5 w-7 bg-emerald-400/80" />
            <span className="h-0.5 w-7 bg-emerald-400/80" />
          </span>
        </>
      )
    case "global":
      return (
        <>
          <span className="rounded-full border border-rose-400/50 bg-rose-400/20 px-1.5 py-0.5 font-mono text-[9px] text-rose-100/80">
            g
          </span>
          <Arrow />
          <span className="flex items-center gap-0.5">
            <Chip className="w-4 border-sky-400/50 bg-sky-400/25" />
            <span className="text-[9px] text-white/45">→</span>
            <Chip className="w-4 border-emerald-400/50 bg-emerald-400/25" />
          </span>
        </>
      )
    case "chain":
      return (
        <>
          <span className="flex items-center gap-0.5 font-mono text-[9px] text-white/50">
            a·b·c·d
          </span>
          <Arrow />
          <span className="font-mono text-[9px] text-emerald-200/80">a→d</span>
        </>
      )
    case "switch":
      return (
        <>
          <span className="flex flex-col items-center gap-0.5">
            <span className="size-2 rounded-full bg-amber-300/80" />
            <span className="flex gap-2">
              <span className="size-2 rounded-full bg-sky-400/70" />
              <span className="size-2 rounded-full bg-emerald-400/70" />
            </span>
          </span>
          <Arrow />
          <span className="flex gap-1">
            <Chip tall className="w-3 border-sky-400/50 bg-sky-400/25" />
            <Chip tall className="w-3 border-emerald-400/50 bg-emerald-400/25" />
          </span>
        </>
      )
    case "extract-fn":
      return (
        <>
          <Chip tall className="w-5 border-white/30 bg-white/15" />
          <Arrow />
          <span className="rounded-[3px] border border-sky-400/45 bg-sky-400/20 px-1 py-1 font-mono text-[8px] text-sky-100/85">
            fn()
          </span>
        </>
      )
    case "inline-fn":
      return (
        <>
          <span className="rounded-[3px] border border-white/25 bg-white/10 px-1 py-1 font-mono text-[8px] text-white/50">
            fn()
          </span>
          <Arrow />
          <Chip tall className="w-5 border-emerald-400/50 bg-emerald-400/25" />
        </>
      )
    case "param-obj":
      return (
        <>
          <span className="flex flex-col gap-0.5">
            <Chip className="w-5 border-sky-400/40 bg-sky-400/20" />
            <Chip className="w-5 border-amber-400/40 bg-amber-400/20" />
          </span>
          <Arrow />
          <Chip className="h-7 w-7 border-emerald-400/50 bg-emerald-400/25" />
        </>
      )
    case "phase":
      return (
        <>
          <Chip className="h-7 w-8 border-white/25 bg-white/10" />
          <Arrow />
          <span className="flex flex-col gap-0.5">
            <Chip className="border-sky-400/50 bg-sky-400/25" />
            <Chip className="border-emerald-400/50 bg-emerald-400/25" />
          </span>
        </>
      )
    case "pull-up":
      return (
        <>
          <span className="flex gap-1">
            <Chip tall className="w-3 border-sky-400/40 bg-sky-400/20" />
            <Chip tall className="w-3 border-amber-400/40 bg-amber-400/20" />
          </span>
          <Arrow />
          <Chip tall className="w-5 border-emerald-400/50 bg-emerald-400/25" />
        </>
      )
    case "guard":
      return (
        <>
          <span className="flex flex-col gap-0.5">
            <Chip className="w-7 border-rose-400/40 bg-rose-400/15" />
            <Chip className="ml-2 w-6 border-rose-400/40 bg-rose-400/15" />
            <Chip className="ml-4 w-5 border-rose-400/40 bg-rose-400/15" />
          </span>
          <Arrow />
          <span className="flex flex-col gap-0.5">
            <span className="rounded-[2px] border border-emerald-400/45 bg-emerald-400/15 px-1 font-mono text-[8px] text-emerald-100/80">
              return
            </span>
            <Chip className="w-7 border-emerald-400/45 bg-emerald-400/20" />
          </span>
        </>
      )
    case "split-loop":
      return (
        <>
          <span className="relative size-7 rounded-full border border-rose-400/45">
            <span className="absolute inset-1 rounded-full border border-amber-400/45" />
          </span>
          <Arrow />
          <span className="flex gap-1">
            <span className="size-5 rounded-full border border-sky-400/50" />
            <span className="size-5 rounded-full border border-emerald-400/50" />
          </span>
        </>
      )
    case "pipeline":
      return (
        <>
          <Chip className="w-5 border-white/25 bg-white/10" />
          <Arrow />
          <span className="flex items-center gap-0.5 font-mono text-[8px] text-sky-100/80">
            <Chip className="w-3 border-sky-400/45 bg-sky-400/20" />
            →
            <Chip className="w-3 border-emerald-400/45 bg-emerald-400/20" />
          </span>
        </>
      )
    case "lookup":
      return (
        <>
          <span className="flex flex-col gap-0.5">
            <span className="h-1 w-6 rounded-sm bg-rose-400/50" />
            <span className="h-1 w-5 rounded-sm bg-rose-400/40" />
            <span className="h-1 w-7 rounded-sm bg-rose-400/30" />
          </span>
          <Arrow />
          <span className="grid grid-cols-2 gap-0.5">
            <span className="size-2.5 rounded-[2px] border border-sky-400/50 bg-sky-400/25" />
            <span className="size-2.5 rounded-[2px] border border-emerald-400/50 bg-emerald-400/25" />
            <span className="size-2.5 rounded-[2px] border border-amber-400/50 bg-amber-400/25" />
            <span className="size-2.5 rounded-[2px] border border-violet-400/50 bg-violet-400/25" />
          </span>
        </>
      )
    case "state":
      return (
        <span className="flex items-center gap-1">
          <span className="size-2.5 rounded-full bg-sky-400/80" />
          <span className="h-px w-3 bg-white/35" />
          <span className="size-2.5 rounded-full bg-amber-400/80" />
          <span className="h-px w-3 bg-white/35" />
          <span className="size-2.5 rounded-full bg-emerald-400/80" />
        </span>
      )
    case "shield-test":
      return (
        <>
          <Chip className="h-7 w-8 border-white/25 bg-white/10" />
          <Arrow />
          <span className="flex gap-0.5">
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
            <span className="size-2.5 rounded-full bg-emerald-400/80" />
          </span>
        </>
      )
    case "steps":
      return (
        <span className="flex items-end gap-0.5">
          <span className="h-2 w-2.5 rounded-[2px] bg-sky-400/50" />
          <span className="h-3.5 w-2.5 rounded-[2px] bg-sky-400/65" />
          <span className="h-5 w-2.5 rounded-[2px] bg-emerald-400/70" />
        </span>
      )
    case "layers":
      return (
        <>
          <span className="flex h-8 w-6 flex-col overflow-hidden rounded-[3px] border border-white/25">
            <span className="flex-1 bg-sky-400/40" />
            <span className="flex-1 bg-amber-400/40" />
            <span className="flex-1 bg-emerald-400/40" />
          </span>
          <Arrow />
          <span className="flex gap-0.5">
            <Chip tall className="w-2.5 border-sky-400/50 bg-sky-400/25" />
            <Chip tall className="w-2.5 border-amber-400/50 bg-amber-400/25" />
            <Chip tall className="w-2.5 border-emerald-400/50 bg-emerald-400/25" />
          </span>
        </>
      )
    case "dry":
      return (
        <>
          <span className="flex flex-col gap-0.5">
            <Chip className="border-rose-400/40 bg-rose-400/20" />
            <Chip className="border-rose-400/40 bg-rose-400/20" />
            <Chip className="border-rose-400/40 bg-rose-400/20" />
          </span>
          <Arrow />
          <Chip className="h-7 w-7 border-emerald-400/50 bg-emerald-400/25" />
        </>
      )
    case "kiss":
      return (
        <>
          <span className="relative h-7 w-7">
            <span className="absolute inset-0 m-auto h-5 w-5 rounded-full border border-rose-400/40" />
            <span className="absolute inset-1 m-auto h-3 w-3 rounded-full border border-amber-400/40" />
          </span>
          <Arrow />
          <span className="flex items-center gap-0.5">
            <Chip className="w-4 border-emerald-400/50 bg-emerald-400/25" />
            <Chip className="w-4 border-emerald-400/50 bg-emerald-400/25" />
          </span>
        </>
      )
    case "yagni":
      return (
        <span className="relative">
          <Chip className="h-8 w-10 border-white/20 bg-white/10" />
          <X className="absolute -right-1 -top-1 size-4 text-rose-400" strokeWidth={2.5} aria-hidden />
        </span>
      )
    case "coverage":
      return (
        <span className="flex h-8 w-10 flex-col overflow-hidden rounded-[3px] border border-white/20">
          <span className="flex-1 bg-emerald-400/45" />
          <span className="h-2 bg-rose-400/45" />
          <span className="flex-1 bg-emerald-400/30" />
        </span>
      )
    case "strangle":
      return (
        <>
          <Chip className="h-7 w-5 border-white/25 bg-white/15" />
          <Arrow />
          <span className="flex h-7 w-5 flex-col overflow-hidden rounded-[3px] border border-white/25">
            <span className="flex-1 bg-white/15" />
            <span className="flex-1 bg-emerald-400/40" />
          </span>
          <Arrow />
          <Chip className="h-7 w-5 border-emerald-400/50 bg-emerald-400/30" />
        </>
      )
    case "ocp":
      return (
        <>
          <Chip className="h-7 w-6 border-white/30 bg-white/15" />
          <Arrow />
          <span className="flex items-end gap-0">
            <Chip className="h-7 w-6 border-white/30 bg-white/15" />
            <Chip className="h-4 w-3 border-emerald-400/50 bg-emerald-400/30" />
          </span>
        </>
      )
    default:
      return <Chip className="border-white/25 bg-white/10" />
  }
}

export function RefactoringDiagram({
  id,
  category,
}: {
  id: number
  category: RefactoringCategory
}) {
  const kind = KIND_BY_ID[id] ?? FALLBACK[category]
  return (
    <div
      className="flex h-[4.5rem] items-center justify-center gap-2 rounded-md border border-white/10 bg-[#12141c]/80 px-2"
      aria-hidden
    >
      <DiagramBody kind={kind} />
    </div>
  )
}
