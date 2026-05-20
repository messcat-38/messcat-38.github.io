import { Navigate, useLocation } from "react-router-dom"

const legacyMap: Record<string, string> = {
  julia: "mandelbrot-zoom",
  pendulum: "drag-cube-lines",
  geometric: "warp-grid",
  "パターン": "particle-fluid",
  pattern: "particle-fluid",
}

export function LegacyRedirect() {
  const { pathname } = useLocation()
  const parts = pathname.split("/").filter(Boolean)

  if (parts[0] === "tags") {
    return <Navigate to="/posts" replace />
  }

  if (parts[0] === "posts" && parts[1]) {
    const slug = decodeURIComponent(parts[1])
    const target = legacyMap[slug]
    if (target) {
      return <Navigate to={`/posts/${target}`} replace />
    }
  }

  return <Navigate to="/" replace />
}
