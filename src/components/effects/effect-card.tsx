import { Link } from "react-router-dom"
import type { EffectEntry } from "@/effects/core/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { EffectCanvas } from "./effect-canvas"
import { cn } from "@/lib/utils"

export function EffectCard({ effect }: { effect: EffectEntry }) {
  return (
    <Link to={`/posts/${effect.slug}`} className="block no-underline hover:no-underline">
      <Card
        className={cn(
          "h-full transition-shadow hover:shadow-md",
          effect.featured && "border-primary/40 lg:col-span-2"
        )}
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-base">{effect.titleJa}</CardTitle>
          <div className="flex flex-wrap gap-1 pt-1">
            {effect.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <EffectCanvas
            mount={effect.mount}
            preview
            className={cn(effect.featured ? "min-h-[220px]" : "min-h-[160px]")}
          />
        </CardContent>
      </Card>
    </Link>
  )
}
