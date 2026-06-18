import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type PortfolioFrameProps = {
  children: ReactNode;
  className?: string;
};

export function PortfolioFrame({ children, className }: PortfolioFrameProps) {
  return (
    <div
      className={cn(
        'mx-auto min-h-screen w-full max-w-[1440px] border-x border-portfolio-line bg-portfolio-bg text-portfolio-ink',
        className
      )}
    >
      {children}
    </div>
  );
}
