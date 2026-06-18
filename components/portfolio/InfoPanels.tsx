import { infoPanels } from 'data/portfolio';

export function InfoPanels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {infoPanels.map((panel) => (
        <article
          className="portfolio-reveal min-h-[240px] border-b border-r border-portfolio-line p-4 font-portfolio-mono text-sm leading-[1.7] text-portfolio-muted"
          key={panel.title}
        >
          <h3 className="mb-4 font-portfolio-heading text-[28px] font-extrabold leading-none text-portfolio-ink">
            {panel.title}
          </h3>
          {panel.body}
        </article>
      ))}
    </div>
  );
}
