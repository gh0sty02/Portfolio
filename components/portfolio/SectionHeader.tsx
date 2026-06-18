import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
};

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="portfolio-reveal grid grid-cols-1 gap-6 border-b border-portfolio-line px-4 py-5 md:grid-cols-[220px_1fr]">
      <p className="font-portfolio-mono text-xs font-bold uppercase text-portfolio-accent">
        {eyebrow}
      </p>
      <h2 className="max-w-[800px] font-portfolio-heading text-[clamp(2rem,5vw,5rem)] font-extrabold leading-[0.94] text-portfolio-ink">
        {title}
      </h2>
    </div>
  );
}
