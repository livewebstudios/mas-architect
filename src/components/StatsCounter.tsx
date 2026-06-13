import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

/** Count-up statistics row; animates once when scrolled into view. */
export default function StatsCounter({ items }: { items: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
      {items.map((s) => (
        <Counter key={s.label} {...s} run={inView} />
      ))}
    </div>
  );
}

function Counter({ value, suffix = '', label, run }: Stat & { run: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value);
      return;
    }
    let raf = 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, value]);

  return (
    <div className="flex flex-col gap-2">
      <span className="font-display text-5xl text-navy md:text-6xl">
        {n}
        {suffix}
      </span>
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-indigo-muted">{label}</span>
    </div>
  );
}
