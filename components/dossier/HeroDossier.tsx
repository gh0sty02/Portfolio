import { profile } from 'data/portfolio';

export function HeroDossier() {
  return (
    <section
      id="top"
      className="grid min-h-[calc(100vh-57px)] grid-cols-1 border-b border-dossier-line md:grid-cols-[minmax(0,1fr)_380px]"
    >
      <div className="flex flex-col justify-between gap-12 border-b border-dossier-line p-[clamp(24px,5vw,54px)] md:border-b-0 md:border-r">
        <h1 className="max-w-[820px] font-dossier-heading text-[clamp(4rem,11vw,11rem)] font-extrabold leading-[0.94] text-dossier-ink">
          {profile.headline}
        </h1>
        <p className="max-w-[720px] font-dossier-mono text-sm leading-[1.7] text-dossier-muted">
          {profile.intro}
        </p>
      </div>

      <aside className="grid content-end gap-4 p-4">
        <div className="grid aspect-[4/5] place-items-center border border-dossier-line bg-[radial-gradient(circle_at_35%_24%,rgba(33,76,255,0.20),transparent_28%),linear-gradient(135deg,#ffffff,#e9e7df)] p-6 text-center font-dossier-mono text-sm leading-6 text-dossier-muted">
          Portrait, workspace image, code crop, or abstract personal mark.
        </div>
        <div className="grid border-t border-dossier-line font-dossier-mono text-[13px]">
          <span className="flex justify-between gap-4 border-b border-dossier-line py-3 text-dossier-muted">
            Role <b className="text-dossier-ink">{profile.role}</b>
          </span>
          <span className="flex justify-between gap-4 border-b border-dossier-line py-3 text-dossier-muted">
            Focus <b className="text-dossier-ink">{profile.focus}</b>
          </span>
          <a
            className="flex justify-between gap-4 border-b border-dossier-line py-3 text-dossier-muted no-underline transition-colors hover:text-dossier-accent"
            href={profile.resumeUrl}
            rel="noreferrer"
            target="_blank"
          >
            Resume <b className="text-dossier-ink">Drive</b>
          </a>
        </div>
      </aside>
    </section>
  );
}
