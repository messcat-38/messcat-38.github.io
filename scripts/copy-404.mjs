import { copyFileSync, existsSync } from "fs"
import { join } from "path"

const dist = "dist"
copyFileSync(join(dist, "index.html"), join(dist, "404.html"))
if (existsSync(".nojekyll")) {
  copyFileSync(".nojekyll", join(dist, ".nojekyll"))
}
console.log("Copied index.html -> 404.html for GitHub Pages SPA routing")
