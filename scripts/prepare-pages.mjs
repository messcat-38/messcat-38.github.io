import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from "fs"
import { dirname, join } from "path"

const dist = "dist"
const indexPath = join(dist, "index.html")

// SPA deep-link restore for GitHub Pages (BrowserRouter).
const spaRedirect = `
<script>
(function () {
  var params = new URLSearchParams(window.location.search)
  var path = params.get("p")
  if (!path) return
  window.history.replaceState(null, "", "/" + path + window.location.hash)
})()
</script>
`

const spa404 = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>messcat</title>
    <script>
      var path = window.location.pathname.replace(/^\\//, "")
      if (path) {
        var params = new URLSearchParams(window.location.search)
        params.set("p", path)
        window.location.replace("/?" + params.toString() + window.location.hash)
      } else {
        window.location.replace("/")
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

// Also emit static shells for known routes (extra safety on Pages).
for (const route of ["product", "blog", "blog/refactoring-proposal"]) {
  const dest = join(dist, route, "index.html")
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(indexPath, dest)
}

console.log("Prepared SPA routing for GitHub Pages")
