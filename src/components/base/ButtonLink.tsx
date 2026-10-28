import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'text';
  className?: string;
}

export default function ButtonLink({ to, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  if (variant === 'text') {
    return (
      <Link
        to={to}
        className={`group inline-flex min-h-[48px] cursor-pointer items-center gap-2 whitespace-nowrap font-label text-[15px] font-semibold text-accent-500 transition-colors duration-200 hover:text-accent-700 ${className}`}
      >
        {children}
        <span className="flex h-4 w-4 items-center justify-center transition-transform duration-200 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1.5 motion-reduce:transform-none">
          <i className="ri-arrow-right-line" aria-hidden="true"></i>
        </span>
      </Link>
    );
  }
  const styles = variant === 'primary'
    ? 'bg-primary-500 text-foreground-950 hover:bg-primary-400'
    : 'border border-background-300 text-foreground-950 hover:border-foreground-950';
  return (
    <Link
      to={to}
      className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center whitespace-nowrap rounded-[9px] px-6 font-label text-[15px] font-semibold transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}