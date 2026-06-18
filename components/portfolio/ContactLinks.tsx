import { contactLinks } from 'data/portfolio';
import { motion } from 'framer-motion';

export function ContactLinks() {
  return (
    <motion.div
      className="grid content-end p-4 font-portfolio-mono text-[13px]"
      initial={{ opacity: 0, y: 22 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-90px' }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {contactLinks.map((link) => {
        const content = (
          <>
            {link.label}
            <span>{link.detail}</span>
          </>
        );

        const className =
          'flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-portfolio-line py-3 text-portfolio-muted no-underline transition-colors hover:text-portfolio-accent';

        if (!link.href) {
          return (
            <span className={className} key={link.label}>
              {content}
            </span>
          );
        }

        return (
          <a
            className={className}
            href={link.href}
            key={link.label}
            rel="noreferrer"
            target={link.href.startsWith('mailto:') ? undefined : '_blank'}
          >
            {content}
          </a>
        );
      })}
    </motion.div>
  );
}
