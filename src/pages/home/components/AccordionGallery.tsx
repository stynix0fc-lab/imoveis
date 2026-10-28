import { useState } from 'react';
import Container from '@/components/base/Container';
import SectionHeading from '@/components/base/SectionHeading';
import { galleryItems } from '@/mocks/site';

export default function AccordionGallery() {
  const [active, setActive] = useState(1);

  return (
    <section aria-labelledby="gallery-heading" className="bg-background-50 py-14 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          id="gallery-heading"
          eyebrow="Onde eu atuo"
          title="Cinco bairros, e o que cada um entrega."
          lead="Não vendo cidade inteira. Concentro o trabalho na zona oeste e em alguns endereços que conheço rua por rua — inclusive o barulho de cada quadra."
        />
      </Container>

      {/* Desktop accordion */}
      <Container wide className="hidden lg:block">
        <div className="flex h-[clamp(500px,40vw,600px)] gap-[10px]" role="group" aria-label="Bairros atendidos">
          {galleryItems.map((item, i) => {
            const isActive = i === active;
            return (
              <button
                key={item.id}
                type="button"
                aria-pressed={isActive}
                aria-label={`${item.label}: ${item.caption}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="relative h-full min-w-0 cursor-pointer overflow-hidden rounded-lg bg-background-100 text-left transition-[flex-grow] duration-[620ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                style={{ flexGrow: isActive ? 4 : 1, flexBasis: 0 }}
              >
                <img src={item.image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground-950/70 to-transparent" aria-hidden="true"></div>
                <div
                  aria-hidden={!isActive}
                  className={`pointer-events-none absolute bottom-0 left-0 w-[460px] p-6 will-change-[opacity,transform] ${isActive ? 'translate-y-0 opacity-100 transition-[opacity,transform] delay-[280ms] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)]' : 'translate-y-3 opacity-0 transition-[opacity,transform] delay-0 duration-200 ease-out'}`}
                >
                  <p className="whitespace-nowrap font-heading text-[22px] font-semibold text-background-50">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.5] text-background-50/90">
                    {item.caption}
                  </p>
                </div>
                {!isActive && (
                  <span className="pointer-events-none absolute bottom-6 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-background-50/90 text-[16px] text-foreground-950">
                    <i className="ri-add-line" aria-hidden="true"></i>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </Container>

      {/* Mobile / tablet swipe cards */}
      <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-2 md:scroll-px-8 md:px-8 lg:hidden">
        {galleryItems.map((item) => (
          <figure key={item.id} className="w-[80vw] max-w-[420px] shrink-0 snap-start">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-lg bg-background-100">
              <img src={item.image} alt={item.caption} title={`${item.label} — bairro atendido pelo Mirante Imóveis`} className="h-full w-full object-cover object-center" />
            </div>
            <figcaption className="pt-4">
              <p className="font-heading text-[20px] font-semibold text-foreground-950">{item.label}</p>
              <p className="mt-1 text-[15px] leading-[1.5] text-foreground-700">{item.caption}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}