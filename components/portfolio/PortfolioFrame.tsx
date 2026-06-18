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
        'min-h-screen w-full overflow-x-hidden bg-portfolio-bg text-portfolio-ink',
        className
      )}
    >
      {children}
    </div>
  );
}
