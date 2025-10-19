# agents.md — Minimal Next.js + Bun System

> Single-source manual for a **lean Next.js on Vercel** setup using **Bun** as the package manager. Minimal deps, vanilla CSS/JS where possible, and **one data file** controls all projects & image URLs.

---

## 0) TL;DR

* **Stack:** Next.js (App Router) + vanilla CSS + tiny client component for lightbox. No Tailwind, no UI libs.
* **One content file:** `app/data/projects.js` (titles, subtitles, image links, alt text, optional aspect ratio).
* **Pages:** `/` with Work grid + About section; accessible **lightbox** powered by `<dialog>`.
* **Deploy:** Push to Vercel; Bun lockfile auto-detected.

---

## Changelog

*   **Multi-page Navigation**: Added `resume` and `contact` pages. Main navigation now links to `/`, `/about`, `/resume`, and `/contact`.
*   **Lightbox Update**: The image gallery lightbox has been changed from a single-image view with arrow key navigation to a multi-image, scrollable modal. It can be closed by clicking on the backdrop.

---

## 1) Repo Layout

```
/
├─ app/
│  ├─ page.js
│  ├─ layout.js
│  ├─ globals.css
│  └─ components/
│     └─ Gallery.js
├─ app/data/projects.js
├─ public/resume.pdf        # optional
├─ next.config.mjs
├─ package.json
├─ README.md
└─ vercel.json              # optional; usually unnecessary
```

---

## 2) Create & Run (Bun)

```bash
# Create project (no Tailwind, no linter, JS, App Router, src dir)
bunx create-next-app@latest creative-portfolio \
  --use-bun --js --app --src-dir --no-tailwind --no-linter --yes

cd creative-portfolio
bun dev   # http://localhost:3000
```

> Tip: Commit `bun.lock`/`bun.lockb` so Vercel auto-runs `bun install`.

---

## 3) Files — Drop-in

### 3.1 `next.config.mjs`

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
export default nextConfig;
```

### 3.2 `package.json`

````json
{
  "name": "creative-portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "devDependencies": {
    "@types/node": "latest",
    "@types/react": "latest",
    "typescript": "^5.6.0"
  },
  "packageManager": "bun@1"
}
```json
{
  "name": "creative-portfolio",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "latest",
    "react": "latest",
    "react-dom": "latest"
  },
  "packageManager": "bun@1"
}
````

### 3.3 `app/layout.tsx`

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Creative Portfolio',
  description: 'Photography & design portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <h1 className="brand">Creative Portfolio</h1>
          <nav>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="/resume.pdf" target="_blank" rel="noopener">Résumé</a>
          </nav>
        </header>
        <main id="main" tabIndex={-1}>{children}</main>
      </body>
    </html>
  );
}
```

### 3.4 `app/page.tsx`

```tsx
import Gallery from './components/Gallery';
import { PROJECTS, LAYOUT } from './data/projects';

export default function Page() {
  return (
    <>
      <section id="work" className="section">
        <div className="section__intro">
          <h2 className="section__title">MY WORK</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.
          </p>
          <p>
            Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          </p>
        </div>
        <Gallery projects={PROJECTS} layout={LAYOUT} />
      </section>

      <section id="about" className="section">
        <h2>About</h2>
        <p>Short bio. Photographer & designer. Replace this copy in <code>/app/page.tsx</code>.</p>
      </section>
    </>
  );
}
```

### 3.5 `app/components/Gallery.tsx`

```tsx
'use client';
import { useEffect, useRef, useState, useMemo } from 'react';
import type { Layout, Project, LayoutEntry } from '../data/projects';

type GalleryProps = { projects: Project[]; layout?: Layout };

type ProjectWithIndex = Project & { _index: number };

type CardItem = { project: ProjectWithIndex; entry: Partial<LayoutEntry> };

export default function Gallery({ projects, layout }: GalleryProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [pIdx, setPIdx] = useState<number>(0);
  const [iIdx, setIIdx] = useState<number>(0);
  const returnRef = useRef<HTMLElement | null>(null);
  const dlgRef = useRef<HTMLDialogElement | null>(null);

  const bySlug = useMemo(() => {
    const map = new Map<string, ProjectWithIndex>();
    projects.forEach((p, i) => map.set(p.slug, { ...p, _index: i }));
    return map;
  }, [projects]);

  const cards: CardItem[] = useMemo(() => {
    if (layout?.homeGrid?.length) {
      return layout.homeGrid
        .map((entry) => {
          const p = bySlug.get(entry.slug);
          if (!p) return null;
          return { project: p, entry } as CardItem;
        })
        .filter(Boolean) as CardItem[];
    }
    return projects.map((p) => ({ project: { ...p, _index: projects.indexOf(p) }, entry: {} }));
  }, [layout, bySlug, projects]);

  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;
    if (open) {
      dlg.showModal?.();
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') { e.preventDefault(); close(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
        if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
      };
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    } else {
      if (dlg.open) dlg.close();
    }
  }, [open]);

  function openAt(projectIndex: number, imageIndex: number, el?: HTMLElement) {
    setPIdx(projectIndex);
    setIIdx(imageIndex);
    returnRef.current = el ?? (document.activeElement as HTMLElement | null);
    setOpen(true);
  }

  function close() {
    setOpen(false);
    queueMicrotask(() => { returnRef.current?.focus?.(); });
  }

  function prev() {
    const len = projects[pIdx].images.length;
    setIIdx((i) => (i - 1 + len) % len);
  }
  function next() {
    const len = projects[pIdx].images.length;
    setIIdx((i) => (i + 1) % len);
  }

  return (
    <>
      <div className="grid" aria-live="polite">
        {cards.map(({ project: p, entry }) => {
          const cover = typeof entry.coverIndex === 'number' ? p.images[entry.coverIndex] : p.cover || p.images[0];
          const startIndex = typeof entry.imageIndex === 'number' ? entry.imageIndex : (typeof entry.coverIndex === 'number' ? entry.coverIndex : 0);
          const cls = [
            'card',
            entry?.span?.md === 2 ? 'span-md-2' : '',
            entry?.span?.lg === 2 ? 'span-lg-2' : '',
          ].filter(Boolean).join(' ');
          return (
            <article className={cls} key={p.slug}>
              <a
                className="card__link"
                href={`#${p.slug}`}
                onClick={(e) => { e.preventDefault(); openAt(p._index, startIndex, e.currentTarget as HTMLElement); }}
              >
                <div className="card__imgwrap" style={{ aspectRatio: (p.aspectRatio || '4/3') as React.CSSProperties['aspectRatio'] }}>
                  <img className="card__img" src={cover.url} alt={cover.alt || ''} loading="lazy" decoding="async" />
                </div>
                <div className="card__body">
                  <h3 className="card__title">{p.title}</h3>
                  {p.subtitle && <p className="card__subtitle">{p.subtitle}</p>}
                </div>
              </a>
            </article>
          );
        })}
      </div>

      <dialog ref={dlgRef} id="lightbox" aria-label="Image viewer" aria-describedby="lbCaption">
        <div className="lightbox__chrome">
          <button className="btn" onClick={close} aria-label="Close">×</button>
          <button className="btn" onClick={prev} aria-label="Previous">←</button>
          <button className="btn" onClick={next} aria-label="Next">→</button>
        </div>
        {open && (
          <figure className="lightbox__figure">
            <img src={projects[pIdx].images[iIdx].url} alt={projects[pIdx].images[iIdx].alt || ''} />
            <figcaption id="lbCaption">
              {projects[pIdx].title}
              {projects[pIdx].images[iIdx].alt ? ' — ' + projects[pIdx].images[iIdx].alt : ''}
            </figcaption>
          </figure>
        )}
      </dialog>
    </>
  );
}
```

### 3.6 `app/data/projects.ts`

```ts
export type ImageItem = { url: string; alt: string };
export type Project = {
  slug: string;
  title: string;
  subtitle?: string;
  cover?: ImageItem;
  aspectRatio?: string; // e.g., '4/3', '16/9'
  images: ImageItem[];
  tags?: string[];
};

export type LayoutEntry = {
  slug: string;
  coverIndex?: number; // which image to show as card cover
  imageIndex?: number; // which image to open first in lightbox
  span?: { md?: 1 | 2; lg?: 1 | 2 };
};

export type Layout = { homeGrid: LayoutEntry[] };

// Placeholder content — replace with your own
export const PROJECTS: Project[] = [
  {
    slug: 'main-feature',
    title: 'Main Feature Project',
    subtitle: 'Full-width hero card',
    cover: { url: 'https://images.unsplash.com/photo-1517816428104-797678c7cf0d', alt: 'Dramatic hero shot placeholder' },
    aspectRatio: '16/9',
    images: [
      { url: 'https://images.unsplash.com/photo-1517816428104-797678c7cf0d', alt: 'Hero variant A' },
      { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee', alt: 'Hero variant B' }
    ]
  },
  {
    slug: 'small-one',
    title: 'Smaller Project One',
    subtitle: 'Placeholder subtitle',
    cover: { url: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305', alt: 'Poster mockup placeholder' },
    aspectRatio: '4/3',
    images: [
      { url: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305', alt: 'Variant A' },
      { url: 'https://images.unsplash.com/photo-1488900128323-21503983a07e', alt: 'Variant B' }
    ]
  },
  {
    slug: 'small-two',
    title: 'Smaller Project Two',
    subtitle: 'Placeholder subtitle',
    cover: { url: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8', alt: 'Minimal product placeholder' },
    aspectRatio: '4/3',
    images: [
      { url: 'https://images.unsplash.com/photo-1487412912498-0447578fcca8', alt: 'Variant A' },
      { url: 'https://images.unsplash.com/photo-1503602642458-232111445657', alt: 'Variant B' }
    ]
  }
];

export const LAYOUT: Layout = {
  homeGrid: [
    { slug: 'main-feature', coverIndex: 0, span: { md: 2, lg: 2 } },
    { slug: 'small-one' },
    { slug: 'small-two' }
  ]
};
```

### 3.7 `app/globals.css` `app/globals.css` `app/globals.css`

```css
:root{
  /* Updated palette */
  --bg: #EEDAD3;       /* background */
  --ink: #222838;      /* primary text */
  --muted: #698A9C;    /* secondary text */
  --accent: #BD8C8C;   /* accent */
  --radius: 16px;
  --gap: 16px;
}
*{box-sizing:border-box}
html,body{margin:0;height:100%;background:var(--bg);color:var(--ink);font:16px/1.5 system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
a{color:inherit}
img{max-width:100%;display:block}

.site-header{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;position:sticky;top:0;background:var(--bg);backdrop-filter:saturate(1.2) blur(6px)}
.site-header nav a{margin-left:12px;text-decoration:none;opacity:0.85}
.site-header nav a:hover{opacity:1}
.brand{font-size:1.125rem;margin:0}

.section{padding:24px 16px;max-width:1100px;margin:0 auto}
.section h2{margin:0 0 12px}

/* Centered intro with two lines of copy */
.section__intro{max-width:720px;margin:0 auto 24px;text-align:center}
.section__title{letter-spacing:.08em;font-weight:700;margin:0 0 8px}
.section__intro p{margin:6px 0;color:var(--muted)}

/* Two-column grid on tablet+; first card can span all via span helpers */
.grid{display:grid;gap:var(--gap);grid-template-columns:1fr}
@media (min-width: 640px){.grid{grid-template-columns:repeat(2,1fr)}}

/* Column span helpers driven by data/layout */
@media (min-width: 640px){ .span-md-2{ grid-column: span 2; } }
@media (min-width: 960px){ .span-lg-2{ grid-column: span 2; } }

.card{border-radius:var(--radius);overflow:hidden;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.08)}
.card__imgwrap{aspect-ratio:4/3;overflow:hidden;background:#eee}
.card__img{width:100%;height:100%;object-fit:cover}
.card__body{padding:12px}
.card__title{margin:0 0 4px;font-weight:600}
.card__subtitle{margin:0;color:var(--muted);font-size:.9rem}
.card__link{display:block;text-decoration:none}
.card__link:focus{outline:2px solid var(--accent);outline-offset:3px}

/* Lightbox */
dialog#lightbox{border:none;border-radius:var(--radius);padding:0;max-width:min(92vw,1100px);width:fit-content}
dialog::backdrop{background:rgba(0,0,0,.5)}
.lightbox__chrome{display:flex;gap:8px;justify-content:flex-end;padding:8px;background:rgba(255,255,255,.9)}
.btn{border:1px solid #ddd;border-radius:12px;background:#fff;padding:4px 8px;cursor:pointer}
.btn:focus{outline:2px solid var(--accent);outline-offset:2px}
.lightbox__figure{margin:0;padding:8px;background:#fff}
.lightbox__figure img{max-height:75vh;height:auto;width:auto}
#lbCaption{margin-top:8px;color:var(--muted);font-size:.95rem}
```

### 3.8 `README.md`

````md
# Creative Portfolio (Next.js + Bun + TypeScript)

## Dev
```bash
bun install
bun add -D typescript @types/react @types/node
bun dev
````

## Type checking

```bash
bun run typecheck
```

## Deploy (Vercel)

* Connect repo → Vercel auto-detects Next.js. With `bun.lock` present it will run Bun.
* No extra config required.

## Content Model

Edit `app/data/projects.ts`. Types provided:

* `Project` — title, subtitle, `images[]`, optional `cover`, `aspectRatio`
* `Layout` — `homeGrid[]` controls order, `coverIndex`, and column spans

## Accessibility Quick Check

* All images have `alt`.
* Keyboard: Tab to cards → Enter opens lightbox; Esc closes; ←/→ navigate; focus returns to card link.

````



### 3.9 `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "jsx": "preserve",
    "allowJs": false,
    "noEmit": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "isolatedModules": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
````