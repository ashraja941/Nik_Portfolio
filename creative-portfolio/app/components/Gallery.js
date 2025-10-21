'use client';
import { useEffect, useRef, useState, useMemo } from 'react';

export default function Gallery({ projects, layout }) {
  const [open, setOpen] = useState(false);
  const [pIdx, setPIdx] = useState(0);
  const returnRef = useRef(null);
  const dlgRef = useRef(null);

  const bySlug = useMemo(() => {
    const map = new Map();
    projects.forEach((p, i) => map.set(p.slug, { ...p, _index: i }));
    return map;
  }, [projects]);

  const cards = useMemo(() => {
    if (layout?.homeGrid?.length) {
      return layout.homeGrid
        .map((entry) => {
          const p = bySlug.get(entry.slug);
          if (!p) return null;
          return { project: p, entry };
        })
        .filter(Boolean);
    }
    return projects.map((p) => ({ project: { ...p, _index: projects.indexOf(p) }, entry: {} }));
  }, [layout, bySlug, projects]);

  useEffect(() => {
    const dlg = dlgRef.current;
    if (!dlg) return;
    if (open) {
      dlg.showModal?.();
      const onKey = (e) => {
        if (e.key === 'Escape') { e.preventDefault(); close(); }
      };
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    } else {
      if (dlg.open) dlg.close();
    }
  }, [open]);

  function openAt(projectIndex, el) {
    setPIdx(projectIndex);
    returnRef.current = el ?? (document.activeElement);
    setOpen(true);
  }

  function close() {
    setOpen(false);
    queueMicrotask(() => { returnRef.current?.focus?.(); });
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
                onClick={(e) => { e.preventDefault(); openAt(p._index, e.currentTarget); }}
              >
                <div className="card__imgwrap" style={{ aspectRatio: (p.aspectRatio || '4/3') }}>
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

      <dialog ref={dlgRef} id="lightbox" aria-label="Image viewer" aria-describedby="lbCaption" onClick={(e) => { if (e.target === dlgRef.current) close(); }}>
        <div className="lightbox__chrome">
          <button className="btn" onClick={close} aria-label="Close">×</button>
        </div>
        {open && (
          <div className="lightbox__grid">
            {(() => {
              const images = projects[pIdx].images;
              const rows = [];
              let currentRow = [];

              for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const colSpan = image.layout?.colSpan || 1;

                if (colSpan === 2) {
                  // Full width image - start new row
                  if (currentRow.length > 0) {
                    rows.push(currentRow);
                    currentRow = [];
                  }
                  rows.push([image]);
                  currentRow = [];
                } else {
                  // Single column image
                  currentRow.push(image);
                  if (currentRow.length === 2) {
                    rows.push(currentRow);
                    currentRow = [];
                  }
                }
              }

              // Add remaining images in current row
              if (currentRow.length > 0) {
                rows.push(currentRow);
              }

              return rows.map((row, rowIndex) => (
                <div key={rowIndex} className="lightbox__row">
                  {row.map((image, imageIndex) => (
                    <figure key={`${rowIndex}-${imageIndex}`} className="lightbox__figure">
                      <img src={image.url} alt={image.alt || ''} />
                      {image.showCaption !== false && (
                        <figcaption id={`lbCaption-${rowIndex}-${imageIndex}`}>
                          {projects[pIdx].title}
                          {image.alt ? ' — ' + image.alt : ''}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              ));
            })()}
          </div>
        )}
      </dialog>
    </>
  );
}