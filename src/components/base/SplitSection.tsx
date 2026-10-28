import type { ReactNode } from 'react';
import Container from '@/components/base/Container';
import Section from '@/components/base/Section';

interface SplitSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  points?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  action?: ReactNode;
  divider?: boolean;
}

export default function SplitSection({
  id, eyebrow, title, paragraphs, points, image, imageAlt, reverse = false, action, divider = false,
}: SplitSectionProps) {
  return (
    <Section labelledBy={id} divider={divider}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={`h-[260px] w-full overflow-hidden rounded-[12px] bg-background-100 sm:h-auto sm:aspect-[3/2] ${reverse ? 'lg:order-2' : ''}`}>
            <img src={image} alt={imageAlt} title={imageAlt} className="h-full w-full object-cover object-center" />
          </div>
          <div className={`max-w-[560px] ${reverse ? 'lg:order-1' : ''}`}>
            {eyebrow && (
              <p className="mb-3 font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-500 md:text-[13px]">
                {eyebrow}
              </p>
            )}
            <h2 id={id} className="font-heading text-[28px] font-semibold leading-[1.12] tracking-[-0.015em] text-foreground-950 md:text-[36px] lg:text-[44px]">
              {title}
            </h2>
            <div className="mt-5 space-y-4">
              {paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-[16px] leading-[1.62] text-foreground-700 md:text-[17px]">{p}</p>
              ))}
            </div>
            {points && (
              <ul className="mt-6 border-t border-background-200">
                {points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 border-b border-background-200 py-3 text-[15px] text-foreground-950 md:text-[16px]">
                    <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center text-primary-600">
                      <i className="ri-check-line" aria-hidden="true"></i>
                    </span>
                    {pt}
                  </li>
                ))}
              </ul>
            )}
            {action && <div className="mt-7">{action}</div>}
          </div>
        </div>
      </Container>
    </Section>
  );
}