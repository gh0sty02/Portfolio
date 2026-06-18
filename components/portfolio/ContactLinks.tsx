import { contactLinks } from 'data/portfolio';

export function ContactLinks() {
  return (
    <div className="portfolio-reveal grid content-end p-4 font-portfolio-mono text-[13px]">
      {contactLinks.map((link) => {
        const content = (
          <>
            {link.label}
            <span>{link.detail}</span>
          </>
        );

        const className =
          'flex justify-between gap-4 border-b border-portfolio-line py-3 text-portfolio-muted no-underline transition-colors hover:text-portfolio-accent';

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
    </div>
  );
}
