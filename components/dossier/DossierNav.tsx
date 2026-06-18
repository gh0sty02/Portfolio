import { profile } from 'data/portfolio';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Info', href: '#info' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
];

export function DossierNav() {
  return (
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
  );
}
