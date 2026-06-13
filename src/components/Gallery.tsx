import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

interface Item {
  src: string;
  alt: string;
  title?: string;
  meta?: string;
  category?: string;
}

interface Props {
  items: Item[];
  categories?: string[];
}

/** Masonry gallery with an accessible lightbox (keyboard + click nav). */
export default function Gallery({ items, categories }: Props) {
  const [active, setActive] = useState('All');
  const [index, setIndex] = useState(-1);
  const closeRef = useRef<HTMLButtonElement>(null);

  const filtered =
    categories && active !== 'All' ? items.filter((i) => i.category === active) : items;
  const open = index >= 0 && index < filtered.length;

  const close = useCallback(() => setIndex(-1), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + filtered.length) % filtered.length),
    [filtered.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % filtered.length),
    [filtered.length]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, close, prev, next]);

  const current = open ? filtered[index] : null;

  return (
    <div>
      {categories && (
        <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={active === c}
              onClick={() => {
                setActive(c);
                setIndex(-1);
              }}
              className={`border px-5 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] transition-colors ${
                active === c
                  ? 'border-navy bg-navy text-paper'
                  : 'border-line text-navy hover:bg-linen'
              }`}
              data-cursor
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {filtered.map((it, i) => (
          <button
            key={it.src + i}
            onClick={() => setIndex(i)}
            className="group relative block w-full overflow-hidden border border-line-soft break-inside-avoid"
            data-cursor
            aria-label={`View ${it.title ?? it.alt}`}
          >
            <img
              src={it.src}
              alt={it.alt}
              loading="lazy"
              decoding="async"
              className="w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0 p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {it.title && <span className="font-display text-lg text-paper">{it.title}</span>}
              {it.meta && (
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.14em] text-paper/80">{it.meta}</span>
              )}
            </span>
            <span className="crop-marks opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true">
              <i className="tl"></i><i className="tr"></i><i className="bl"></i><i className="br"></i>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {open && current && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-paper/95 p-4 backdrop-blur-md md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={current.title ?? 'Project image'}
          >
            <button
              ref={closeRef}
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-line text-navy transition-colors hover:bg-navy hover:text-paper md:right-8 md:top-8"
              data-cursor
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1 1l14 14M15 1L1 15" stroke="currentColor" stroke-width="1.4" /></svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-line bg-paper/70 text-navy transition-colors hover:bg-navy hover:text-paper md:left-6"
              data-cursor
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="1.4" /></svg>
            </button>

            <figure className="m-0 flex max-h-full flex-col items-center gap-4" onClick={(e) => e.stopPropagation()}>
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[78vh] max-w-full border border-line-soft object-contain"
              />
              {(current.title || current.meta) && (
                <figcaption className="text-center">
                  {current.title && <span className="font-display text-xl text-navy">{current.title}</span>}
                  {current.meta && (
                    <span className="ml-3 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-indigo-muted">{current.meta}</span>
                  )}
                </figcaption>
              )}
            </figure>

            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-line bg-paper/70 text-navy transition-colors hover:bg-navy hover:text-paper md:right-6"
              data-cursor
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="1.4" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
