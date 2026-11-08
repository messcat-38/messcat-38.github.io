# messcat

Personal portfolio — one-page Vite + React + TypeScript + Tailwind site with an ASCII video background ([asciify-engine](https://www.npmjs.com/package/asciify-engine)).

## Layout

```
src/
  content.ts          # site copy + nav
  components/         # ascii bg, header
  sections/           # about / product / contact
public/               # sea.mp4, poster, product image, favicon
```

## Develop

```bash
npm install
npm run dev
```

## Build / lint

```bash
npm run build
npm run lint
```

Deploy: push to `develop` runs **Deploy to GitHub Pages**. Site source must be **GitHub Actions**.
