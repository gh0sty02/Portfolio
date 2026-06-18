import { profile } from 'data/portfolio';
import Image from 'next/image';

export function HeroPortfolio() {
  return (
    <section
      id="top"
      className="grid grid-cols-1 border-b border-portfolio-line lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]"
    >
      <div className="flex min-h-[520px] flex-col justify-between gap-10 border-b border-portfolio-line p-[clamp(24px,5vw,72px)] sm:min-h-[600px] lg:min-h-[720px] lg:border-b-0 lg:border-r">
        <h1 className="max-w-[980px] text-balance font-portfolio-heading text-[clamp(3.25rem,12vw,9rem)] font-extrabold leading-[0.94] text-portfolio-ink">
          {profile.headline}
        </h1>
        <p className="max-w-[720px] font-portfolio-mono text-sm leading-[1.8] text-portfolio-muted sm:text-base">
          {profile.intro}
        </p>
      </div>

      <aside className="grid content-end gap-4 p-4 sm:grid-cols-[minmax(0,0.85fr)_minmax(240px,1fr)] sm:items-end lg:grid-cols-1">
        <Image
          alt="Abstract personal mark for Pranay Yadav"
          className="aspect-[4/5] w-full max-w-[420px] border border-portfolio-line bg-white object-cover sm:justify-self-end lg:max-w-none"
          height={1125}
          src="/profile-mark.svg"
          priority
          unoptimized
          width={900}
        />
        <div className="grid border-t border-portfolio-line font-portfolio-mono text-[13px]">
          <span className="flex justify-between gap-4 border-b border-portfolio-line py-3 text-portfolio-muted">
            Role <b className="text-portfolio-ink">{profile.role}</b>
          </span>
          <span className="flex justify-between gap-4 border-b border-portfolio-line py-3 text-portfolio-muted">
            Focus <b className="text-portfolio-ink">{profile.focus}</b>
          </span>
          <a
            className="flex justify-between gap-4 border-b border-portfolio-line py-3 text-portfolio-muted no-underline transition-colors hover:text-portfolio-accent"
            href={profile.resumeUrl}
            rel="noreferrer"
            target="_blank"
          >
            Resume <b className="text-portfolio-ink">Drive</b>
          </a>
        </div>
      </aside>
    </section>
  );
}
