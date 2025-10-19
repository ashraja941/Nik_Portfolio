# Creative Portfolio (Next.js + Bun)

## Dev
```bash
bun install
bun dev
```

## Deploy (Vercel)

* Connect repo → Vercel auto-detects Next.js. With `bun.lock` present it will run Bun.
* No extra config required.

## Content Model

Edit `app/data/projects.js`.

* `Project` — title, subtitle, `images[]`, optional `cover`, `aspectRatio`
* `Layout` — `homeGrid[]` controls order, `coverIndex`, and column spans

## Accessibility Quick Check

* All images have `alt`.
* Keyboard: Tab to cards → Enter opens lightbox; Esc closes; ←/→ navigate; focus returns to card link.