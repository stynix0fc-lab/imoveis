import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  variant?: 'up' | 'wipe';
  delay?: number;
  className?: string;
}

/*
 * One-shot entrance. Content is visible by default; the hidden state is only
 * armed (before first paint) when the element starts below the viewport and
 * IntersectionObserver is available and motion is allowed.
 */
export default function Reveal({ children, variant = 'up', delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<'idle' | 'armed' | 'shown'>('idle');

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    setState('armed');
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (state !== 'armed' || !el) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        // Show when entering, or if fast scrolling already carried it above the viewport.
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setState('shown');
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [state]);

  return (
    <div
      ref={ref}
      data-state={state}
      className={`reveal-${variant} ${className}`}
      style={{ '--rd': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}