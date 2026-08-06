'use client';

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';

/**
 * Scroll-triggered animation, per section — the same grouping the prototype
 * settled on: when a section enters the viewport every animated element inside
 * it fires at the same instant, and it fires again on each re-entry rather than
 * only the first time.
 *
 * The count of entries doubles as the trigger for <Counter>; CSS animations key
 * off the `data-inview` attribute, which drops to "false" on exit so the
 * animation is re-applied — and therefore restarted — on the way back in.
 */
const PlayContext = createContext(0);

export function AnimatedSection({
  children,
  className,
  style,
  id,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setPlay((p) => p + 1);
        } else {
          setInView(false);
        }
      },
      // Mirrors the prototype's "top < 92% of viewport, bottom > 8%" test.
      { rootMargin: '-8% 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} id={id} className={className} style={style} data-inview={String(inView)}>
      <PlayContext.Provider value={play}>{children}</PlayContext.Provider>
    </section>
  );
}

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Counts from zero up to `value`, preserving whatever decoration the string
 * carries — "16,7K", "184.320", "38 ms", "99,99%" all animate only their
 * numeric part. Restarts every time the surrounding section re-enters view.
 */
export function Counter({ value, locale = 'pt-BR' }: { value: string; locale?: string }) {
  const play = useContext(PlayContext);
  const [text, setText] = useState(value);

  useEffect(() => {
    if (!play) return;

    const match = value.match(/[\d.,]+/);
    if (!match) return;

    const numStr = match[0];
    // Portuguese and Spanish author their figures as "16,7K" / "184.320";
    // English as "16.7K" / "184,320". Parsing has to follow the locale.
    const commaDecimal = locale.startsWith('pt') || locale.startsWith('es');
    const target = parseFloat(
      commaDecimal ? numStr.replace(/\./g, '').replace(',', '.') : numStr.replace(/,/g, ''),
    );
    if (!isFinite(target)) return;

    if (prefersReducedMotion()) {
      setText(value);
      return;
    }

    // whole numbers ("7", "38 ms") have no fractional part to read
    const decimals = ((commaDecimal ? numStr.split(',')[1] : numStr.split('.')[1]) || '').length;
    const format = (v: number) =>
      v.toLocaleString(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

    const duration = 1250;
    const start = performance.now();
    let frame = 0;

    setText(value.replace(numStr, format(0)));

    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      // Land on the authored string exactly, so no formatting drift shows.
      setText(t < 1 ? value.replace(numStr, format(target * eased)) : value);
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [play, value, locale]);

  return <>{text}</>;
}
