import { writingLinks } from 'data/portfolio';
import { motion } from 'framer-motion';

export function WritingPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {writingLinks.map((item) => {
        const content = (
          <>
            <h3 className="mb-4 font-portfolio-heading text-[28px] font-extrabold leading-none text-portfolio-ink">
              {item.title}
            </h3>
            <p className="mb-4 font-portfolio-mono text-xs font-bold uppercase text-portfolio-accent">
              {item.platform} / {item.meta}
            </p>
            <p>{item.body}</p>
            <span className="mt-6 inline-block font-portfolio-mono text-xs font-bold uppercase text-portfolio-ink">
              Open preview
            </span>
          </>
        );

        const className =
          'border-b border-portfolio-line p-4 font-portfolio-mono text-sm leading-[1.7] text-portfolio-muted transition-colors hover:bg-portfolio-paper hover:text-portfolio-ink focus-visible:bg-portfolio-paper focus-visible:text-portfolio-ink sm:min-h-[220px] lg:min-h-[260px] lg:border-r';

        const motionProps = {
          initial: { opacity: 0, y: 22 },
          transition: { duration: 0.45, ease: 'easeOut' as const },
          viewport: { once: true, margin: '-90px' },
          whileHover: { y: -4, transition: { duration: 0.2, ease: 'easeOut' as const } },
          whileInView: { opacity: 1, y: 0 },
        };

        if (!item.url) {
          return (
            <motion.article className={className} key={item.title} {...motionProps}>
              {content}
            </motion.article>
          );
        }

        return (
          <motion.a
            className={className}
            href={item.url}
            key={item.title}
            rel="noreferrer"
            target="_blank"
            {...motionProps}
          >
            {content}
          </motion.a>
        );
      })}
    </div>
  );
}
