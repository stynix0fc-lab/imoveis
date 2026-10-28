import Container from '@/components/base/Container';
import ButtonLink from '@/components/base/ButtonLink';

interface CTASectionProps {
  title: string;
  text: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  title,
  text,
  primaryLabel = 'Agendar uma conversa',
  primaryTo = '/contato',
  secondaryLabel = 'Ver imóveis disponíveis',
  secondaryTo = '/imoveis',
}: CTASectionProps) {
  return (
    <section aria-labelledby="closing-cta" className="bg-background-50 py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-8 border-t border-background-300 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <h2 id="closing-cta" className="font-heading text-[30px] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground-950 md:text-[38px] lg:text-[46px]">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-[16px] leading-[1.6] text-foreground-700 md:text-[17px]">{text}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <ButtonLink to={primaryTo}>{primaryLabel}</ButtonLink>
              <ButtonLink to={secondaryTo} variant="text">{secondaryLabel}</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}