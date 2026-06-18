import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
};

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-3 border-b border-portfolio-line px-4 py-5 sm:gap-6 lg:grid-cols-[220px_minmax(0,1fr)]"
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-80px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <p className="font-portfolio-mono text-xs font-bold uppercase text-portfolio-accent">
        {eyebrow}
      </p>
      <h2 className="max-w-[780px] text-balance font-portfolio-heading text-[clamp(2rem,8vw,4.75rem)] font-extrabold leading-[0.96] text-portfolio-ink">
        {title}
      </h2>
    </motion.div>
  );
}
