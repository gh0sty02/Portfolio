import { metrics } from 'data/portfolio';
import { motion } from 'framer-motion';

export function MetricsStrip() {
  return (
    <div className="grid grid-cols-2 border-b border-portfolio-line lg:grid-cols-4">
      {metrics.map((metric, index) => (
        <motion.div
          className="border-r border-portfolio-line p-4"
          initial={{ opacity: 0, y: 18 }}
          key={metric.label}
          transition={{ delay: index * 0.06, duration: 0.45, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
          whileHover={{ backgroundColor: '#ffffff' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="font-portfolio-heading text-[clamp(2.25rem,7vw,4.75rem)] font-extrabold leading-none text-portfolio-ink">
            {metric.value}
          </p>
          <p className="mt-2 font-portfolio-mono text-xs uppercase text-portfolio-muted">
            {metric.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
