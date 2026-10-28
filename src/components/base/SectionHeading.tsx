import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  lead?: string;
  aside?: ReactNode;
  id?: string;
}

export default function SectionHeading({ eyebrow, title, lead, aside, id }: SectionHeadingProps) {
  return (
    <div className="mb-7 flex flex-col gap-5 md:mb-9 lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
      <div className="max-w-[680px]">
        {eyebrow && (
          <p className="mb-3 font-label text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-500 md:text-[13px]">
            {eyebrow}
          </p>
        )}
        <h2
          id={id}
          className="font-heading text-[30px] font-semibold leading-[1.1] tracking-[-0.015em] text-foreground-950 md:text-[38px] lg:text-[46px]"
        >
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-[600px] text-[16px] leading-[1.6] text-foreground-700 md:text-[17px]">{lead}</p>}
      </div>
      {aside && <div className="shrink-0">{aside}</div>}
    </div>
  );
}