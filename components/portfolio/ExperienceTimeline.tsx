import { experienceRecords } from 'data/portfolio';
import { motion } from 'framer-motion';

export function ExperienceTimeline() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {experienceRecords.map((record, index) => (
        <motion.article
          className="group border-b border-portfolio-line p-4 font-portfolio-mono text-sm leading-[1.7] text-portfolio-muted transition-colors hover:bg-portfolio-paper lg:border-r"
          initial={{ opacity: 0, y: 24 }}
          key={`${record.title}-${record.scope}`}
          transition={{ delay: index * 0.08, duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-90px' }}
          whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="mb-4 text-xs font-bold uppercase text-portfolio-accent">
            {record.scope}
          </p>
          <h3 className="font-portfolio-heading text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[0.94] text-portfolio-ink">
            {record.title}
          </h3>
          <p className="mt-5 max-w-[640px]">{record.summary}</p>
          <ul className="mt-6 grid gap-3">
            {record.highlights.map((highlight) => (
              <li
                className="border-l-2 border-portfolio-line pl-3 transition-colors group-hover:border-portfolio-accent"
                key={highlight}
              >
                {highlight}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}
