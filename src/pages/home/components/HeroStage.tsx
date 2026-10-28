import { useEffect, useRef } from 'react';
import Container from '@/components/base/Container';
import useMediaQuery from '@/hooks/useMediaQuery';
import { heroAssets } from '@/mocks/site';
import HeroCopy from './HeroCopy';
import IntroContent from './IntroContent';

/* Registered source canvas shared by master, foreground and first 941 rows of the plate. */
const SRC_W = 1672;
const SRC_H = 941;
const PLATE_H = 2048;
const SILHOUETTE_TOP = 402; // first opaque source row of the building cutout
const START_OFFSET_VH = 0.12; // start exit when H1 bottom is ~12% from viewport top
const TRAVEL_VH = 1.45;
const LIFT = 1.08; // shared enlargement (bottom-anchored) so the roofline rises into the wordmark // scroll distance driving the full exit (slower reveal)

/**
 * One continuous three-layer scene at every width:
 * plate (back) -> DOM copy + intro (middle) -> building cutout overlay (front).
 */
export default function HeroStage() {
  const animate = !useMediaQuery('(prefers-reduced-motion: reduce)');
  const stageRef = useRef<HTMLElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const fgRef = useRef<HTMLImageElement>(null);
  const introRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const h1 = h1Ref.current;
    const bg = bgRef.current;
    const fg = fgRef.current;
    const intro = introRef.current;
    if (!stage || !h1 || !bg || !fg || !intro) return undefined;

    let startS = 0;
    let travel = 1;
    let exitPx = 0;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!animate) { fg.style.transform = 'translate3d(0,0,0)'; return; }
      const s = -stage.getBoundingClientRect().top;
      const p = Math.min(1, Math.max(0, (s - startS) / travel));
      fg.style.transform = `translate3d(0, ${(p * exitPx).toFixed(2)}px, 0)`;
    };

    const measure = () => {
      const W = stage.clientWidth;
      const H = window.innerHeight;
      // Shared cover scale + shared origin, composite aligned to viewport bottom.
      const scale = Math.max(W / SRC_W, H / SRC_H) * LIFT;
      const w = SRC_W * scale;
      const x = (W - w) / 2;
      const y = H - SRC_H * scale;
      stage.style.setProperty('--hero-h', `${H}px`);

      for (const img of [bg, fg]) {
        img.style.width = `${w}px`;
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;
      }
      bg.style.height = `${PLATE_H * scale}px`;
      fg.style.height = `${SRC_H * scale}px`;

      // Translate only as far as needed for the visible silhouette to clear the bottom.
      exitPx = H - (y + SILHOUETTE_TOP * scale) + 4;

      stage.style.minHeight = '';
      const stageTop = stage.getBoundingClientRect().top;
      const h1Bottom = h1.getBoundingClientRect().bottom - stageTop;
      startS = Math.max(0, h1Bottom - H * START_OFFSET_VH);
      travel = H * TRAVEL_VH;
      const introBottom = intro.getBoundingClientRect().bottom - stageTop;
      const needed = animate ? startS + travel + H : 0;
      stage.style.minHeight = `${Math.ceil(Math.max(introBottom, needed))}px`;
      update();
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    measure();
    document.fonts?.ready.then(measure).catch(() => undefined);
    const ro = new ResizeObserver(() => measure());
    ro.observe(stage);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    window.addEventListener('pageshow', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      window.removeEventListener('pageshow', measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [animate]);

  return (
    <section ref={stageRef} aria-labelledby="intro-heading" className="relative bg-background-50" style={{ overflow: 'clip' }}>
      {/* Layer 1: continuous sky-to-white plate (same origin as foreground) */}
      <img ref={bgRef} src={heroAssets.background} alt="" aria-hidden="true" className="pointer-events-none absolute block max-w-none select-none" />

      {/* Layer 2: real DOM content */}
      <div className="relative z-10">
        <div style={{ height: 'var(--hero-h, 100svh)' }}>
          <div className="w-full px-3 md:px-5 lg:px-6">
            <div className="pt-[calc(72px+8vh)] md:pt-[calc(80px+13vh)]">
              <HeroCopy ref={h1Ref} />
            </div>
          </div>
        </div>
        <div ref={introRef} className="pb-20 pt-[10vh] md:pb-24 md:pt-[14vh]">
          <Container>
            <IntroContent />
          </Container>
        </div>
      </div>

      {/* Layer 3: registered building cutout overlay */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 z-20"
        style={animate ? { bottom: 0 } : { height: 'var(--hero-h, 100svh)' }}
        aria-hidden="true"
      >
        <div className="sticky top-0" style={{ height: 'var(--hero-h, 100svh)', overflow: 'clip' }}>
          <img
            ref={fgRef}
            src={heroAssets.foreground}
            alt=""
            className="absolute block max-w-none select-none will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}