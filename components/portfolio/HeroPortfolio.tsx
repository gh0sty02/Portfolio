import { profile } from 'data/portfolio';
import Image from 'next/image';

export function HeroPortfolio() {
  return (
    <section
      id="top"
      className="portfolio-reveal grid min-h-[calc(100vh-57px)] grid-cols-1 border-b border-portfolio-line lg:grid-cols-[minmax(0,1fr)_420px]"
    >
      <div className="flex flex-col justify-between gap-12 border-b border-portfolio-line p-[clamp(24px,5vw,72px)] lg:border-b-0 lg:border-r">
        <h1 className="max-w-[1120px] text-balance font-portfolio-heading text-[clamp(3.8rem,9vw,10.5rem)] font-extrabold leading-[0.94] text-portfolio-ink">
          {profile.headline}
        </h1>
        <p className="max-w-[780px] font-portfolio-mono text-sm leading-[1.8] text-portfolio-muted md:text-base">
          {profile.intro}
        </p>
      </div>

      <aside className="grid content-end gap-4 p-4">
        <Image
          alt="Abstract personal mark for Pranay Yadav"
          className="aspect-[4/5] w-full border border-portfolio-line bg-white object-cover"
          height={1125}
          src="/profile-mark.svg"
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
