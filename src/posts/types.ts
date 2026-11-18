import type { ComponentType } from "react"

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  Content: ComponentType
}
