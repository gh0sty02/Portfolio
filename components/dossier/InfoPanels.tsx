import { infoPanels } from 'data/portfolio';

export function InfoPanels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {infoPanels.map((panel) => (
        <article
          className="dossier-reveal min-h-[240px] border-b border-r border-dossier-line p-4 font-dossier-mono text-sm leading-[1.7] text-dossier-muted"
          key={panel.title}
        >
          <h3 className="mb-4 font-dossier-heading text-[28px] font-extrabold leading-none text-dossier-ink">
            {panel.title}
          </h3>
          {panel.body}
        </article>
      ))}
    </div>
  );
}
