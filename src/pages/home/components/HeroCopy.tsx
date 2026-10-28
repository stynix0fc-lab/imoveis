import { forwardRef, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { AnimSplitText } from '@readdy/anim/header/split-text/react';
import useMediaQuery from '@/hooks/useMediaQuery';

const REF_SIZE = 100; // px reference size used for measurement
const FIT = 0.995; // tiny safety margin against sub-pixel rounding

/*
 * Measured editorial wordmark. The headline is rendered at a reference size,
 * its real glyph width (both weights + gap) is measured, then the font size is
 * scaled so the line exactly fits the Header-aligned container. No clipping.
 */
const HeroCopy = forwardRef<HTMLHeadingElement>((_props, ref) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lastSize = useRef(0);
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const setH1 = useCallback((el: HTMLHeadingElement | null) => {
    h1Ref.current = el;
    if (typeof ref === 'function') ref(el);
    else if (ref) ref.current = el;
  }, [ref]);

  const fit = useCallback(() => {
    const box = boxRef.current;
    const h1 = h1Ref.current;
    if (!box || !h1) return;
    const available = box.clientWidth;
    if (!available) return;
    h1.style.fontSize = `${REF_SIZE}px`;
    const widest = Math.max(...lineRefs.current.map((l) => (l ? l.getBoundingClientRect().width : 0)));
    if (!widest) return;
    const size = Math.floor(((REF_SIZE * available) / widest) * FIT * 100) / 100;
    h1.style.fontSize = `${size}px`;
    box.style.setProperty('--hero-fs', `${size}px`);
    if (Math.abs(size - lastSize.current) > 0.1) {
      lastSize.current = size;
      // Let the stage refresh its trigger geometry (no animation rebuild).
      window.dispatchEvent(new Event('resize'));
    }
  }, []);

  useLayoutEffect(() => { fit(); }, [fit]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return undefined;
    const ro = new ResizeObserver(() => fit());
    ro.observe(box);
    document.fonts?.ready.then(fit).catch(() => undefined);
    document.fonts?.addEventListener?.('loadingdone', fit);
    return () => {
      ro.disconnect();
      document.fonts?.removeEventListener?.('loadingdone', fit);
    };
  }, [fit]);

  return (
    <div ref={boxRef} className="relative w-full">
      <div className="pointer-events-none absolute bottom-full left-[calc(var(--hero-fs,0px)*0.07)] right-[calc(var(--hero-fs,0px)*0.07)] hidden items-end justify-between gap-8 pb-4 md:flex md:translate-y-[43px] lg:pb-6">
        <p className="whitespace-nowrap font-label text-[13px] font-semibold uppercase tracking-[0.14em] text-[#2B2B2B] lg:text-[14px]">
          Corretor de imóveis
        </p>
        <p className="max-w-[300px] text-right font-label text-[11px] font-light leading-[1.55] text-[#4A4A4A] lg:text-[12px]">
          Imóveis residenciais em São Paulo,
          <br />
          escolhidos um a um, sem pressa.
        </p>
      </div>
      <h1
        ref={setH1}
        aria-label="Mirante Imóveis"
        className="uppercase md:translate-y-[43px] leading-[0.84] tracking-[-0.01em] text-[#1F1F1F]"
        style={{ fontFamily: "'Archivo', 'Helvetica Neue', Arial, sans-serif", fontStretch: '78%', fontSize: '64px' }}
      >
        {/* Desktop/tablet: one line. Narrow phones: stacked, fitted to the wider word. */}
        <span ref={(el) => { lineRefs.current[0] = el; }} className="hidden whitespace-nowrap sm:inline-block">
          <span className="font-bold">Mirante</span>
          {reduceMotion ? (
            <span className="font-extralight">{'\u00A0'}Imóveis</span>
          ) : (
            <AnimSplitText stagger={50}>
              <span className="font-extralight">{'\u00A0'}Imóveis</span>
            </AnimSplitText>
          )}
        </span>
        <span className="block sm:hidden">
          <span ref={(el) => { lineRefs.current[1] = el; }} className="inline-block whitespace-nowrap font-bold">Mirante</span>
        </span>
        <span className="block sm:hidden">
          <span ref={(el) => { lineRefs.current[2] = el; }} className="inline-block whitespace-nowrap font-extralight">Imóveis</span>
        </span>
      </h1>
      <p className="mt-3 md:translate-y-[43px] lg:translate-x-[13px] text-left font-label text-[10px] font-medium uppercase tracking-[0.34em] text-[#26352A]/80 md:mt-4 md:text-[12px]">
        CRECI-SP 148.392-F · Desde 2013
      </p>
    </div>
  );
});

HeroCopy.displayName = 'HeroCopy';

export default HeroCopy;