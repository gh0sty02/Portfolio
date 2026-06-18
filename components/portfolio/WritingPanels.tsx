import { writingLinks } from 'data/portfolio';

export function WritingPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {writingLinks.map((item) => {
        const content = (
          <>
            <h3 className="mb-4 font-portfolio-heading text-[28px] font-extrabold leading-none text-portfolio-ink">
              {item.title}
            </h3>
            <p>{item.body}</p>
          </>
        );

        const className =
          'portfolio-reveal border-b border-portfolio-line p-4 font-portfolio-mono text-sm leading-[1.7] text-portfolio-muted transition-colors hover:bg-portfolio-paper hover:text-portfolio-ink focus-visible:bg-portfolio-paper focus-visible:text-portfolio-ink sm:min-h-[220px] lg:min-h-[240px] lg:border-r';

        if (!item.url) {
          return (
            <article className={className} key={item.title}>
              {content}
            </article>
          );
        }

        return (
          <a
            className={className}
            href={item.url}
            key={item.title}
            rel="noreferrer"
            target="_blank"
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
