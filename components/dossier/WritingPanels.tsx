import { writingLinks } from 'data/portfolio';

export function WritingPanels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {writingLinks.map((item) => {
        const content = (
          <>
            <h3 className="mb-4 font-dossier-heading text-[28px] font-extrabold leading-none text-dossier-ink">
              {item.title}
            </h3>
            <p>{item.body}</p>
          </>
        );

        const className =
          'dossier-reveal min-h-[240px] border-b border-r border-dossier-line p-4 font-dossier-mono text-sm leading-[1.7] text-dossier-muted transition-colors hover:bg-dossier-paper hover:text-dossier-ink focus-visible:bg-dossier-paper focus-visible:text-dossier-ink';

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
