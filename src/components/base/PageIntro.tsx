import type { ReactNode } from 'react';
import Container from '@/components/base/Container';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  lead: string;
  aside?: ReactNode;
}

export default function PageIntro({ eyebrow, title, lead, aside }: PageIntroProps) {
  return (
    <section className="bg-background-50 pb-12 pt-[112px] md:pb-16 md:pt-[144px] lg:pb-20 lg:pt-[176px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-7">
            <p className="mb-4 font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-500 md:text-[13px]">{eyebrow}</p>
            <h1 className="font-heading text-[36px] font-semibold leading-[1.08] tracking-[-0.02em] text-foreground-950 md:text-[48px] lg:text-[60px]">
              {title}
            </h1>
          </div>
          <div className="flex flex-col justify-end lg:col-span-5 lg:pl-8">
            <p className="text-[17px] leading-[1.6] text-foreground-700">{lead}</p>
            {aside && <div className="mt-6">{aside}</div>}
          </div>
        </div>
      </Container>
    </section>
  );
}