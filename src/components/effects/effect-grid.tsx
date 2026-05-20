import { effects } from "@/effects/registry"
import { EffectCard } from "./effect-card"

export function EffectGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <h2 className="mb-6 text-center text-xl font-semibold">Effects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {effects.map((effect) => (
          <EffectCard key={effect.slug} effect={effect} />
        ))}
      </div>
    </section>
  )
}
