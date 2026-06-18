import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
};

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="grid grid-cols-1 gap-6 border-b border-dossier-line px-4 py-5 md:grid-cols-[220px_1fr]">
      <p className="font-dossier-mono text-xs font-bold uppercase text-dossier-accent">
        {eyebrow}
      </p>
      <h2 className="max-w-[800px] font-dossier-heading text-[clamp(2rem,5vw,5rem)] font-extrabold leading-[0.94] text-dossier-ink">
        {title}
      </h2>
    </div>
  );
}
