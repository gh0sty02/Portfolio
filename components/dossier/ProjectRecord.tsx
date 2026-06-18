import { cn } from '@/lib/utils';
import type { FeaturedProject } from 'data/portfolio';
import Image from 'next/image';

type ProjectRecordProps = {
  project: FeaturedProject;
};

export function ProjectRecord({ project }: ProjectRecordProps) {
  const links = [
    project.liveUrl ? { label: 'Live', href: project.liveUrl } : null,
    project.githubUrl ? { label: 'GitHub', href: project.githubUrl } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article
      className={cn(
        'dossier-reveal group min-h-[430px] border-b border-r border-dossier-line bg-dossier-paper p-4 transition-colors hover:bg-dossier-bg',
        project.size === 'large' ? 'md:col-span-7' : 'md:col-span-5'
      )}
    >
      <div className="flex min-h-full flex-col justify-between gap-6">
        <div>
          <p className="mb-4 font-dossier-mono text-xs font-bold uppercase text-dossier-accent">
            {project.category}
          </p>
          <h3 className="font-dossier-heading text-[clamp(2.4rem,5vw,5rem)] font-extrabold leading-[0.94] text-dossier-ink">
            {project.name}
          </h3>
          <p className="mt-4 max-w-[560px] font-dossier-mono text-sm leading-[1.7] text-dossier-muted">
            {project.summary}
          </p>
        </div>

        <div>
          <div className="mt-6 grid h-[220px] place-items-center overflow-hidden border border-dossier-line bg-[#efeee8]">
            {project.image ? (
              <Image
                alt={`${project.name} project preview`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                height={440}
                src={project.image}
                width={720}
              />
            ) : (
              <span className="px-6 text-center font-dossier-mono text-sm text-dossier-muted">
                {project.name} visual pending
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-dossier-mono text-xs text-dossier-muted">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className="border border-dossier-line px-2 py-1 uppercase"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>

            {links.length > 0 ? (
              <div className="flex gap-3">
                {links.map((link) => (
                  <a
                    className="font-bold uppercase text-dossier-ink transition-colors hover:text-dossier-accent"
                    href={link.href}
                    key={link.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ) : (
              <span className="uppercase">Links pending</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
