import { useEffect, useRef } from "react"
import type { EffectMount } from "@/effects/core/types"
import { cn } from "@/lib/utils"

type Props = {
  mount: EffectMount
  preview?: boolean
  className?: string
}

export function EffectCanvas({ mount, preview = false, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const cleanup = mount(el, { preview })
    return cleanup
  }, [mount, preview])

  return (
    <div
      ref={ref}
      className={cn("h-full min-h-[160px] w-full overflow-hidden rounded-lg bg-muted/30", className)}
    />
  )
}
