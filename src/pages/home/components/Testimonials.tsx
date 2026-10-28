import Container from '@/components/base/Container';
import Section from '@/components/base/Section';
import SectionHeading from '@/components/base/SectionHeading';
import { testimonials } from '@/mocks/site';

export default function Testimonials() {
  return (
    <Section labelledBy="depoimentos-heading" className="bg-background-100" divider>
      <Container>
        <SectionHeading
          id="depoimentos-heading"
          eyebrow="Quem já passou por aqui"
          title="O que fica depois da mudança."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex h-full flex-col rounded-lg border border-background-200 bg-background-50 p-6 md:p-7">
              <span className="flex h-8 w-8 items-center justify-center text-[22px] text-primary-500">
                <i className="ri-double-quotes-l" aria-hidden="true"></i>
              </span>
              <blockquote className="mt-4 flex-1 text-[16px] leading-[1.62] text-foreground-950">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-background-200 pt-4">
                <p className="font-label text-[14px] font-semibold text-foreground-950">{t.name}</p>
                <p className="mt-0.5 text-[13px] text-foreground-600">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}