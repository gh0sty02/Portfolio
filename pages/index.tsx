import { DossierFrame } from '@/components/dossier/DossierFrame';
import { DossierNav } from '@/components/dossier/DossierNav';
import { HeroDossier } from '@/components/dossier/HeroDossier';
import { SectionHeader } from '@/components/dossier/SectionHeader';
import type { NextPage } from 'next';
import Head from 'next/head';
import type { ReactElement } from 'react';

const Home: NextPage & { getLayout?: (page: ReactElement) => ReactElement } = () => {
  return (
    <>
      <Head>
        <title>Pranay Yadav | Portfolio</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="Visual dossier of selected work, field notes, and public writing by Pranay Yadav."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pranayyadav.vercel.app" />
        <meta property="og:title" content="Pranay Yadav | Portfolio" />
        <meta
          property="og:description"
          content="Selected work and field notes from a full-stack engineer working with React, Next.js, and APIs."
        />
      </Head>

      <HeroDossier />

      <main>
        <section id="work" className="border-b border-dossier-line">
          <SectionHeader eyebrow="01 / Work" title="Project records" />
          <div className="p-4 font-dossier-mono text-sm leading-7 text-dossier-muted">
            Project gallery lands in Phase 5.
          </div>
        </section>

        <section id="info" className="border-b border-dossier-line">
          <SectionHeader eyebrow="02 / Info" title="Short bio, stack, and experience." />
          <div className="p-4 font-dossier-mono text-sm leading-7 text-dossier-muted">
            Info panels land in Phase 6.
          </div>
        </section>

        <section id="writing" className="border-b border-dossier-line">
          <SectionHeader eyebrow="03 / Writing" title="Writing and public trail." />
          <div className="p-4 font-dossier-mono text-sm leading-7 text-dossier-muted">
            Writing links land in Phase 6.
          </div>
        </section>

        <section id="contact" className="grid grid-cols-1 border-b border-dossier-line md:grid-cols-[1fr_380px]">
          <h2 className="border-b border-dossier-line p-[clamp(24px,5vw,54px)] font-dossier-heading text-[clamp(3rem,8vw,8rem)] font-extrabold leading-[0.94] text-dossier-ink md:border-b-0 md:border-r">
            Reach out.
          </h2>
          <div className="grid content-end p-4 font-dossier-mono text-sm text-dossier-muted">
            Contact links land in Phase 6.
          </div>
        </section>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <DossierFrame>
      <DossierNav />
      {page}
    </DossierFrame>
  );
};

export default Home;
