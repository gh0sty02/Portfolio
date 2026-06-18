import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
} from '@/components/ui/modal';
import { skillCategories } from 'data/portfolio';
import { motion } from 'framer-motion';

const allSkills = skillCategories.flatMap((category) =>
  category.all.map((skill) => ({ category: category.title, skill }))
);

export function SkillsStack() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="border-b border-portfolio-line p-4 lg:col-span-4 lg:border-r">
        <motion.p
          className="max-w-[420px] font-portfolio-mono text-sm leading-[1.8] text-portfolio-muted"
          initial={{ opacity: 0, y: 18 }}
          viewport={{ once: true, margin: '-80px' }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          A stacked technical surface across product UI, backend contracts,
          automation, performance, accessibility, and test coverage.
        </motion.p>

        <Modal>
          <ModalTrigger asChild>
            <button
              className="mt-6 border border-portfolio-ink px-4 py-3 font-portfolio-mono text-xs font-bold uppercase text-portfolio-ink transition-colors hover:bg-portfolio-ink hover:text-white focus-visible:bg-portfolio-ink focus-visible:text-white"
              type="button"
            >
              View all skills
            </button>
          </ModalTrigger>
          <ModalContent className="max-w-[920px] rounded-none border border-portfolio-line bg-portfolio-bg p-0 text-portfolio-ink">
            <ModalHeader className="border-b border-portfolio-line p-4 pr-12">
              <ModalTitle className="font-portfolio-heading text-[clamp(2rem,5vw,4rem)] font-extrabold leading-none">
                Full skill inventory
              </ModalTitle>
              <ModalCloseButton />
            </ModalHeader>
            <ModalBody className="grid max-h-[70vh] gap-4 overflow-y-auto p-4">
              {skillCategories.map((category) => (
                <section key={category.title}>
                  <h3 className="mb-3 font-portfolio-mono text-xs font-bold uppercase text-portfolio-accent">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.all.map((skill) => (
                      <span
                        className="border border-portfolio-line bg-portfolio-paper px-3 py-2 font-portfolio-mono text-xs uppercase text-portfolio-muted"
                        key={skill}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              ))}
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>

      <div className="grid grid-cols-1 lg:col-span-8 lg:grid-cols-2">
        {skillCategories.map((category, index) => (
          <motion.article
            className="group border-b border-portfolio-line p-4 transition-colors hover:bg-portfolio-paper lg:border-r"
            initial={{ opacity: 0, y: 24 }}
            key={category.title}
            transition={{ delay: index * 0.05, duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-90px' }}
            whileHover={{ y: -4 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3 className="font-portfolio-heading text-[clamp(2rem,6vw,4rem)] font-extrabold leading-none text-portfolio-ink">
              {category.title}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {category.featured.map((skill) => (
                <span
                  className="border border-portfolio-line px-3 py-2 font-portfolio-mono text-xs font-bold uppercase text-portfolio-muted transition-colors group-hover:border-portfolio-accent group-hover:text-portfolio-ink"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <p className="sr-only">
        {allSkills.map(({ skill }) => skill).join(', ')}
      </p>
    </div>
  );
}
