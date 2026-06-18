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
        className="grid grid-cols-1 gap-4 border-b border-portfolio-line p-4 font-portfolio-mono text-[13px] font-semibold uppercase text-portfolio-muted sm:grid-cols-[1fr_auto]"
      >
        <a className="text-portfolio-ink no-underline" href="#top">
          {profile.name} / Portfolio
        </a>
        <div className="flex flex-wrap gap-4">
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
