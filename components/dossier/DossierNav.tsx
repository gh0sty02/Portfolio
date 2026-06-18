import { profile } from 'data/portfolio';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Info', href: '#info' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export function DossierNav() {
  return (
    <>
      <a
        className="sr-only z-50 bg-dossier-accent px-3 py-2 font-dossier-mono text-sm text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        href="#work"
      >
        Skip to work
      </a>
      <nav
        aria-label="Primary navigation"
        className="grid grid-cols-1 gap-4 border-b border-dossier-line p-4 font-dossier-mono text-[13px] font-semibold uppercase text-dossier-muted sm:grid-cols-[1fr_auto]"
      >
        <a className="text-dossier-ink no-underline" href="#top">
          {profile.name} / Portfolio
        </a>
        <div className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              className="no-underline transition-colors hover:text-dossier-accent focus-visible:text-dossier-accent"
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
