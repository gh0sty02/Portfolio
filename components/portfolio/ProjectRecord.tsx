import { cn } from '@/lib/utils';
import type { FeaturedProject } from 'data/portfolio';
import { motion } from 'framer-motion';
import Image from 'next/image';

type ProjectRecordProps = {
  project: FeaturedProject;
  fullWidth?: boolean;
};

export function ProjectRecord({ project, fullWidth }: ProjectRecordProps) {
  const isVectorImage = project.image?.endsWith('.svg') ?? false;
  const links = [
    project.liveUrl ? { label: 'Live', href: project.liveUrl } : null,
    project.githubUrl ? { label: 'GitHub', href: project.githubUrl } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <motion.article
      className={cn(
        'group border-b border-portfolio-line bg-portfolio-paper p-4 transition-colors hover:bg-portfolio-bg sm:min-h-[430px] lg:border-r',
        fullWidth
          ? 'lg:col-span-12'
          : project.size === 'large'
            ? 'lg:col-span-7'
            : 'lg:col-span-5'
      )}
      initial={{ opacity: 0, y: 28 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true, margin: '-90px' }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex min-h-full flex-col justify-between gap-6">
        <div>
          <p className="mb-4 font-portfolio-mono text-xs font-bold uppercase text-portfolio-accent">
            {project.category}
          </p>
          <h3 className="text-balance font-portfolio-heading text-[clamp(2.3rem,10vw,4.75rem)] font-extrabold leading-[0.94] text-portfolio-ink">
            {project.name}
          </h3>
          <p className="mt-4 max-w-[560px] font-portfolio-mono text-sm leading-[1.7] text-portfolio-muted">
            {project.summary}
          </p>
        </div>

        <div>
          <div className="mt-6 grid aspect-[16/9] place-items-center overflow-hidden border border-portfolio-line bg-[#efeee8]">
            {project.image ? (
              <motion.div
                className="h-full w-full"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                whileHover={{ scale: 1.04 }}
              >
                <Image
                  alt={`${project.name} project preview`}
                  className={cn(
                    'h-full w-full object-cover',
                    project.imagePosition === 'center'
                      ? 'object-center'
                      : 'object-top'
                  )}
                  height={440}
                  src={project.image}
                  unoptimized={isVectorImage}
                  width={720}
                />
              </motion.div>
            ) : (
              <span className="px-6 text-center font-portfolio-mono text-sm text-portfolio-muted">
                {project.name} preview unavailable
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-col gap-3 font-portfolio-mono text-xs text-portfolio-muted sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
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
              <div className="flex flex-wrap gap-3">
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
    </motion.article>
  );
}
