import { cn } from '@/lib/utils';
import type { FeaturedProject } from 'data/portfolio';
import Image from 'next/image';

type ProjectRecordProps = {
  project: FeaturedProject;
};

export function ProjectRecord({ project }: ProjectRecordProps) {
  const isVectorImage = project.image?.endsWith('.svg') ?? false;
  const links = [
    project.liveUrl ? { label: 'Live', href: project.liveUrl } : null,
    project.githubUrl ? { label: 'GitHub', href: project.githubUrl } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <article
      className={cn(
        'portfolio-reveal group min-h-[430px] border-b border-r border-portfolio-line bg-portfolio-paper p-4 transition-colors hover:bg-portfolio-bg',
        project.size === 'large' ? 'md:col-span-7' : 'md:col-span-5'
      )}
    >
      <div className="flex min-h-full flex-col justify-between gap-6">
        <div>
          <p className="mb-4 font-portfolio-mono text-xs font-bold uppercase text-portfolio-accent">
            {project.category}
          </p>
          <h3 className="font-portfolio-heading text-[clamp(2.4rem,5vw,5rem)] font-extrabold leading-[0.94] text-portfolio-ink">
            {project.name}
          </h3>
          <p className="mt-4 max-w-[560px] font-portfolio-mono text-sm leading-[1.7] text-portfolio-muted">
            {project.summary}
          </p>
        </div>

        <div>
          <div className="mt-6 grid h-[240px] place-items-center overflow-hidden border border-portfolio-line bg-[#efeee8]">
            {project.image ? (
              <Image
                alt={`${project.name} project preview`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                height={440}
                src={project.image}
                unoptimized={isVectorImage}
                width={720}
              />
            ) : (
              <span className="px-6 text-center font-portfolio-mono text-sm text-portfolio-muted">
                {project.name} preview unavailable
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 font-portfolio-mono text-xs text-portfolio-muted">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  className="border border-portfolio-line px-2 py-1 uppercase"
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
                    className="font-bold uppercase text-portfolio-ink transition-colors hover:text-portfolio-accent focus-visible:text-portfolio-accent"
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
              <span className="uppercase">Links unavailable</span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
