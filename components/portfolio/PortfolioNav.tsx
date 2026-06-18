import { profile } from 'data/portfolio';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Info', href: '#info' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export function PortfolioNav() {
  return (
    <>
      <a
        className="sr-only z-50 bg-portfolio-accent px-3 py-2 font-portfolio-mono text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#work"
      >
        Skip to work
      </a>
      <nav
        aria-label="Primary navigation"
        className="grid grid-cols-1 gap-3 border-b border-portfolio-line px-4 py-3 font-portfolio-mono text-[12px] font-semibold uppercase text-portfolio-muted sm:grid-cols-[1fr_auto] sm:items-center sm:text-[13px]"
      >
        <a className="text-portfolio-ink no-underline" href="#top">
          {profile.name} / Portfolio
        </a>
        <div className="flex flex-wrap gap-x-4 gap-y-2 sm:justify-end">
          {links.map((link) => (
            <a
              key={link.href}
              className="no-underline transition-colors hover:text-portfolio-accent focus-visible:text-portfolio-accent"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
