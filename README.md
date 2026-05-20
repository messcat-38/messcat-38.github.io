# mess cat — portfolio

Vite + React + Tailwind + shadcn/ui + Three.js で構築したポートフォリオサイト。

## ローカル開発

```bash
npm install
npm run dev
```

ブラウザで http://localhost:5173 を開く。

## 本番ビルド確認

```bash
npm run build
npm run preview
```

http://localhost:4173 で GitHub Pages 同等の出力を確認できる。

## デプロイ

`main` ブランチへの push で GitHub Actions により GitHub Pages へ自動デプロイされる。
