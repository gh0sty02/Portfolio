import { profile } from 'data/portfolio';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Work', href: '#work', id: 'work' },
  { label: 'Info', href: '#info', id: 'info' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Writing', href: '#writing', id: 'writing' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export function PortfolioNav() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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
              className={cn(
                'no-underline underline-offset-4 transition-colors hover:text-portfolio-accent focus-visible:text-portfolio-accent',
                activeId === link.id && 'text-portfolio-ink underline'
              )}
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
