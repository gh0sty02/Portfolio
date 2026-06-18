import { cn } from '@/lib/utils';
import { skillCategories } from 'data/portfolio';
import { motion } from 'framer-motion';

const allSkills = skillCategories.flatMap((category) =>
  category.all.map((skill) => ({ category: category.title, skill }))
);

export function SkillsStack() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {skillCategories.map((category, index) => {
        const Icon = category.icon;
        const isLearning = Boolean(category.note);

        return (
          <motion.article
            className={cn(
              'group border-b border-portfolio-line p-6 transition-colors hover:bg-portfolio-paper lg:border-r lg:p-8',
              isLearning && 'border-dashed',
              index === skillCategories.length - 1 &&
                skillCategories.length % 2 !== 0 &&
                'lg:col-span-2'
            )}
            initial={{ opacity: 0, y: 24 }}
            key={category.title}
            transition={{ delay: index * 0.05, duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-90px' }}
            whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-baseline justify-between">
              <p className="font-portfolio-mono text-xs font-bold text-portfolio-muted">
                {String(index + 1).padStart(2, '0')} /
              </p>
              <p className="font-portfolio-mono text-xs font-bold uppercase text-portfolio-muted">
                {category.all.length} skills
              </p>
            </div>
            <div className="mt-1 flex items-center gap-3">
              <Icon
                aria-hidden="true"
                className="h-6 w-6 shrink-0 text-portfolio-ink"
              />
              <h3 className="font-portfolio-heading text-[clamp(1.5rem,3.5vw,2.25rem)] font-extrabold leading-none text-portfolio-ink">
                {category.title}
              </h3>
            </div>
            {category.note ? (
              <p className="mt-2 font-portfolio-mono text-xs italic text-portfolio-accent">
                {category.note}
              </p>
            ) : null}
            <div className="mt-8 flex flex-wrap gap-3">
              {category.all.map((skill, skillIndex) => (
                <motion.span
                  className="border border-portfolio-line px-4 py-3 font-portfolio-mono text-xs font-bold uppercase text-portfolio-muted transition-colors group-hover:border-portfolio-accent hover:!bg-portfolio-ink hover:!text-portfolio-bg group-hover:text-portfolio-ink"
                  initial={{ opacity: 0, y: 8 }}
                  key={skill}
                  transition={{
                    delay: index * 0.05 + skillIndex * 0.03,
                    duration: 0.3,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true, margin: '-90px' }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        );
      })}

      <p className="sr-only">
        {allSkills.map(({ skill }) => skill).join(', ')}
      </p>
    </div>
  );
}
