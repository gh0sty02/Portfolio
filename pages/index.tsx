import { ContactLinks } from '@/components/portfolio/ContactLinks';
import { ExperienceTimeline } from '@/components/portfolio/ExperienceTimeline';
import { PortfolioFrame } from '@/components/portfolio/PortfolioFrame';
import { PortfolioNav } from '@/components/portfolio/PortfolioNav';
import { HeroPortfolio } from '@/components/portfolio/HeroPortfolio';
import { InfoPanels } from '@/components/portfolio/InfoPanels';
import { ProjectGallery } from '@/components/portfolio/ProjectGallery';
import { SectionHeader } from '@/components/portfolio/SectionHeader';
import { SkillsStack } from '@/components/portfolio/SkillsStack';
import { WritingPanels } from '@/components/portfolio/WritingPanels';
import type { NextPage } from 'next';
import Head from 'next/head';
import { MotionConfig, motion } from 'framer-motion';
import type { ReactElement } from 'react';

const Home: NextPage & { getLayout?: (page: ReactElement) => ReactElement } = () => {
  return (
    <>
      <Head>
        <title>Pranay Yadav | Portfolio</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta
          name="description"
          content="Visual portfolio of selected work, field notes, and public writing by Pranay Yadav."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pranayyadav.vercel.app" />
        <meta property="og:title" content="Pranay Yadav | Portfolio" />
        <meta
          property="og:description"
          content="Selected work and field notes from a full-stack engineer working with React, Next.js, and APIs."
        />
      </Head>

      <HeroPortfolio />

      <main>
        <section id="work" className="border-b border-portfolio-line">
          <SectionHeader eyebrow="01 / Work" title="Project records" />
          <ProjectGallery />
        </section>

        <section id="info" className="border-b border-portfolio-line">
          <SectionHeader eyebrow="02 / Info" title="Short bio, stack, and experience." />
          <InfoPanels />
        </section>

        <section id="experience" className="border-b border-portfolio-line">
          <SectionHeader eyebrow="03 / Experience" title="Teams, systems, and production delivery." />
          <ExperienceTimeline />
        </section>

        <section id="skills" className="border-b border-portfolio-line">
          <SectionHeader eyebrow="04 / Skills" title="A stacked technical toolkit." />
          <SkillsStack />
        </section>

        <section id="writing" className="border-b border-portfolio-line">
          <SectionHeader eyebrow="05 / Writing" title="Writing and public trail." />
          <WritingPanels />
        </section>

        <section id="contact" className="grid grid-cols-1 border-b border-portfolio-line lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)]">
          <motion.h2
            className="border-b border-portfolio-line p-[clamp(24px,5vw,54px)] font-portfolio-heading text-[clamp(3rem,11vw,7.5rem)] font-extrabold leading-[0.94] text-portfolio-ink lg:border-b-0 lg:border-r"
            initial={{ opacity: 0, y: 22 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-90px' }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Reach out.
          </motion.h2>
          <ContactLinks />
        </section>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MotionConfig reducedMotion="user">
      <PortfolioFrame>
        <PortfolioNav />
        {page}
      </PortfolioFrame>
    </MotionConfig>
  );
};

export default Home;
