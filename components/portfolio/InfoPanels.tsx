import { infoPanels } from 'data/portfolio';
import { motion } from 'framer-motion';

export function InfoPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {infoPanels.map((panel) => (
        <motion.article
          className="border-b border-portfolio-line p-4 font-portfolio-mono text-sm leading-[1.7] text-portfolio-muted transition-colors hover:bg-portfolio-paper sm:min-h-[220px] lg:min-h-[240px] lg:border-r"
          initial={{ opacity: 0, y: 22 }}
          key={panel.title}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-90px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="mb-4 font-portfolio-heading text-[28px] font-extrabold leading-none text-portfolio-ink">
            {panel.title}
          </h3>
          {panel.body}
        </motion.article>
      ))}
    </div>
  );
}
