import { infoPanels } from 'data/portfolio';

export function InfoPanels() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      {infoPanels.map((panel) => (
        <article
          className="portfolio-reveal border-b border-portfolio-line p-4 font-portfolio-mono text-sm leading-[1.7] text-portfolio-muted sm:min-h-[220px] lg:min-h-[240px] lg:border-r"
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
