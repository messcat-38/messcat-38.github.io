import type { Post } from "./types"
import { RefactoringProposalContent } from "./refactoring-proposal"

export const posts: Post[] = [
  {
    slug: "refactoring-proposal",
    title: "Refactoring proposal",
    date: "2026-11-18",
    summary: "リファクタ用プロンプト100選。カードからコピー。",
    Content: RefactoringProposalContent,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}
