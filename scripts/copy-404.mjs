import { copyFileSync, existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

const dist = "dist"
const indexPath = join(dist, "index.html")

const spaRedirect = `
<script>
(function () {
  var params = new URLSearchParams(window.location.search)
  var path = params.get("p")
  if (!path) return
  var decoded = "/" + path + window.location.hash
  window.history.replaceState(null, "", decoded)
})()
</script>
`

const spa404 = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>mess cat</title>
    <script>
      var params = new URLSearchParams(window.location.search)
      var path = window.location.pathname.replace(/^\\//, "")
      if (path && !params.has("p")) {
        params.set("p", path)
        window.location.replace("/?" + params.toString() + window.location.hash)
      }
    </script>
  </head>
  <body></body>
</html>
`

let indexHtml = readFileSync(indexPath, "utf8")
if (!indexHtml.includes('params.get("p")')) {
  indexHtml = indexHtml.replace("</head>", `${spaRedirect}</head>`)
  writeFileSync(indexPath, indexHtml)
}

writeFileSync(join(dist, "404.html"), spa404)

if (existsSync(".nojekyll")) {
  copyFileSync(".nojekyll", join(dist, ".nojekyll"))
}

console.log("Prepared index.html and 404.html for GitHub Pages SPA routing")
