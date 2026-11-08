import { writeFileSync } from "fs"
import { join } from "path"

// One-page hash-anchor site: unknown paths just bounce home.
const page404 = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0; url=/" />
    <title>messcat</title>
    <script>location.replace("/")</script>
  </head>
  <body></body>
</html>
`

writeFileSync(join("dist", "404.html"), page404)
console.log("Wrote dist/404.html → /")
