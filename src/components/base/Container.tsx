import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}

export default function Container({ children, wide = false, className = '' }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 md:px-8 lg:px-12 ${wide ? 'max-w-[1456px]' : 'max-w-[1296px]'} ${className}`}
    >
      {children}
    </div>
  );
}