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

- **develop** … ソースコード（ここで開発・push）
- **main** … ビルド成果物のみ（GitHub Pages が配信）

`develop` への push で CI が `npm run build` し、`main` に `dist` を公開する（従来の Hugo 運用と同様）。
