# mess cat — docs

Vite + React 19。ASCII 雰囲気背景。ダーク固定。GitHub Pages。

## ルート

| パス | 内容 |
|---|---|
| `/` | About + Contact |
| `/product` | messmap |
| `/blog` | 記事一覧 |
| `/blog/:slug` | 記事（例: refactoring-proposal） |

## よく触る場所

| 対象 | パス |
|---|---|
| ルーティング | `src/App.tsx` |
| ナビ・文言 | `src/content.ts` |
| スタイル | `src/index.css` |
| Blog | `src/posts/registry.ts` |
| Refactoring cards | `src/posts/refactoring-items.ts` |
| ASCII 背景 | `src/components/ascii-video-bg.tsx` |
| Deploy | `.github/workflows/deploy.yml` |
