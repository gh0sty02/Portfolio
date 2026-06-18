import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

type DossierFrameProps = {
  children: ReactNode;
  className?: string;
};

export function DossierFrame({ children, className }: DossierFrameProps) {
  return (
    <div
      className={cn(
        'mx-auto min-h-screen w-[min(1240px,calc(100%_-_36px))] border-x border-dossier-line bg-dossier-bg text-dossier-ink',
        className
      )}
    >
      {children}
    </div>
  );
}
