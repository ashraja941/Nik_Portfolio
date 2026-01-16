'use client';
import { useEffect, useRef, useState, useMemo } from 'react';

function parseAspectRatio(value) {
  if (typeof value !== 'string') return null;
  const parts = value.split('/').map((part) => Number(part.trim()));
  if (parts.length !== 2) return null;
  const [w, h] = parts;
  if (!Number.isFinite(w) || !Number.isFinite(h) || h === 0) return null;
  return w / h;
}

function getProvidedRatio(image) {
  if (!image) return null;
  if (image.layout?.aspectRatio) {
    return parseAspectRatio(image.layout.aspectRatio);
  }
  const layoutWidth = image.layout?.width;
  const layoutHeight = image.layout?.height;
  if (typeof layoutWidth === 'number' && typeof layoutHeight === 'number' && layoutHeight !== 0) {
    return layoutWidth / layoutHeight;
  }
  if (typeof image.width === 'number' && typeof image.height === 'number' && image.height !== 0) {
    return image.width / image.height;
  }
  return null;
}

export default function Gallery({ projects, layout }) {
  const [open, setOpen] = useState(false);
  const [pIdx, setPIdx] = useState(0);
  const [imageRatios, setImageRatios] = useState({});
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
          if (entry.heading) return null;
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

  const lightboxRows = useMemo(() => {
    const project = projects[pIdx];
    if (!project?.images?.length) return [];

    const rows = [];
    let currentRow = [];
    let currentSection = null;

    const getImagesPerRow = (heading) => {
      if (heading === 'Portraiture') return 3;
      if (heading === 'Travel') return 4;
      return 2; // default
    };

    const flushCurrentRow = () => {
      if (!currentRow.length) return;
      rows.push({
        type: currentRow.length > 1 ? 'multi' : 'single',
        images: currentRow,
      });
      currentRow = [];
    };

    for (const image of project.images) {
      if (image?.heading) {
        flushCurrentRow();
        currentSection = image.heading;
        rows.push({ type: 'heading', heading: image.heading });
        continue;
      }

      const colSpan = image?.layout?.colSpan || 1;
      if (colSpan === 2) {
        flushCurrentRow();
        rows.push({ type: 'full', images: [image] });
        continue;
      }

      const imagesPerRow = getImagesPerRow(currentSection);
      currentRow.push(image);
      if (currentRow.length === imagesPerRow) {
        rows.push({ type: 'multi', images: currentRow });
        currentRow = [];
      }
    }

    flushCurrentRow();

    return rows;
  }, [projects, pIdx]);

  useEffect(() => {
    if (!open) return undefined;
    const project = projects[pIdx];
    if (!project?.images?.length) return undefined;

    const disposers = [];

    project.images.forEach((image) => {
      if (!image?.url) return;
      const provided = getProvidedRatio(image);
      if (provided) return;
      if (imageRatios[image.url]) return;
      if (typeof window === 'undefined') return;

      const img = new window.Image();
      const finalize = () => {
        const ratio = img.naturalWidth && img.naturalHeight ? img.naturalWidth / img.naturalHeight : 1;
        setImageRatios((prev) => {
          if (prev[image.url]) return prev;
          return { ...prev, [image.url]: ratio };
        });
      };
      img.addEventListener('load', finalize);
      img.addEventListener('error', finalize);
      img.src = image.url;
      disposers.push(() => {
        img.removeEventListener('load', finalize);
        img.removeEventListener('error', finalize);
      });
    });

    return () => {
      disposers.forEach((dispose) => dispose());
    };
  }, [open, pIdx, projects, imageRatios]);

  const resolveImageRatio = (image) => {
    const provided = getProvidedRatio(image);
    if (provided) return provided;
    if (image?.url && imageRatios[image.url]) return imageRatios[image.url];
    return 1;
  };

  const layoutItems = useMemo(() => {
    if (layout?.homeGrid?.length) {
      return layout.homeGrid.map((entry) => {
        if (entry.heading) {
          return { type: 'heading', heading: entry.heading };
        }
        const p = bySlug.get(entry.slug);
        if (!p) return null;
        return { type: 'project', project: p, entry };
      }).filter(Boolean);
    }
    // Fallback: if no layout, show all projects
    return projects.map((p) => ({ 
      type: 'project', 
      project: { ...p, _index: projects.indexOf(p) }, 
      entry: {} 
    }));
  }, [layout, bySlug, projects]);

  return (
    <>
      <div className="grid" aria-live="polite">
        {layoutItems.map((item, index) => {
          if (item.type === 'heading') {
            return (
              <div key={`heading-${index}`} className="grid-heading">
                <h3 className="grid-heading__text">{item.heading}</h3>
              </div>
            );
          }
          const { project: p, entry } = item;
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

      <dialog ref={dlgRef} id="lightbox" aria-label="Image viewer" onClick={(e) => { if (e.target === dlgRef.current) close(); }}>
        <div className="lightbox__chrome">
          <button className="btn" onClick={close} aria-label="Close">×</button>
        </div>
        {open && (
          <div className="lightbox__grid">
            {lightboxRows.map((row, rowIndex) => {
              if (row.type === 'heading') {
                return (
                  <div key={rowIndex} className="lightbox__section">
                    <span className="lightbox__section-divider" aria-hidden="true" />
                    <h4 className="lightbox__section-title">{row.heading}</h4>
                    <span className="lightbox__section-divider" aria-hidden="true" />
                  </div>
                );
              }

              if (!row.images?.length) return null;
              const isMulti = row.type === 'multi';
              const rowClass = ['lightbox__row'];
              if (row.type === 'full') rowClass.push('lightbox__row--full');
              if (row.type === 'single') rowClass.push('lightbox__row--single');
              if (isMulti) rowClass.push('lightbox__row--multi');

              const totalRatio = isMulti
                ? row.images.reduce((sum, image) => sum + resolveImageRatio(image), 0)
                : null;
              const safeTotalRatio = isMulti && totalRatio && totalRatio > 0 ? totalRatio : null;

              return (
                <div key={rowIndex} className={rowClass.join(' ')}>
                  {row.images.map((image, imageIndex) => {
                    const ratio = resolveImageRatio(image);
                    const widthPercent = isMulti && safeTotalRatio
                      ? `${(ratio / safeTotalRatio) * 100}%`
                      : '100%';
                    
                    // For single or full-width images, apply max-height if specified or if image is vertical
                    const isSingle = row.type === 'single';
                    const isFull = row.type === 'full';
                    const maxHeight = image?.layout?.maxHeight;
                    const isVertical = ratio < 1;
                    const figureStyle = {};
                    const imgStyle = {};
                    
                    if (isMulti) {
                      figureStyle.flexBasis = widthPercent;
                      figureStyle.maxWidth = widthPercent;
                    } else if (isSingle || isFull) {
                      // Apply max-height directly to the image for single or full-width images
                      if (maxHeight) {
                        imgStyle.maxHeight = typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight;
                      } else if (isVertical) {
                        // Default max-height for vertical images: 80vh or container-based
                        imgStyle.maxHeight = '80vh';
                      }
                    }
                    
                    return (
                      <figure
                        key={`${rowIndex}-${imageIndex}`}
                        className="lightbox__figure"
                        style={Object.keys(figureStyle).length > 0 ? figureStyle : undefined}
                      >
                         <img src={image.url} alt={image.alt || ''} style={Object.keys(imgStyle).length > 0 ? imgStyle : undefined} />
                      </figure>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </dialog>
    </>
  );
}
