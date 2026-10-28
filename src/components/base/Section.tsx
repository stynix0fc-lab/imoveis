import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  labelledBy?: string;
  divider?: boolean;
}

export default function Section({ children, className = '', labelledBy, divider = false }: SectionProps) {
  return (
    <section
      aria-labelledby={labelledBy}
      className={`bg-background-50 py-14 md:py-20 lg:py-24 ${divider ? 'border-t border-background-200' : ''} ${className}`}
    >
      {children}
    </section>
  );
}