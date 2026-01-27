import { Container } from '@/components/ui/container';
import { Heading } from '@/components/ui/heading';
import { useTheme } from '@/hooks/use-theme';
import Paragraph from 'components/utils/Paragraph';
import React from 'react';
import { getProjects } from 'data/Projects';
import Content from 'components/Projects/ProjectDescription';
import CoverImage from 'components/Projects/CoverImage';
import Head from 'next/head';
import { motion } from 'framer-motion';

const ProjectScreen = () => {
  const { resolvedTheme } = useTheme();
  const borderColor =
    resolvedTheme === 'light' ? 'border-gray-300' : 'border-gray-700';
  const projects = getProjects();

  return (
    <>
      <Head>
        <title>Pranay Yadav | Projects</title>
        <link rel="icon" href="/logo.svg" />
        <meta
          name="description"
          content="Pranay Yadav | Full stack developer "
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pranayyadav.vercel.app" />
        <meta
          property="og:title"
          content="Pranay Yadav | Full stack developer "
        />
      </Head>
      <main>
        <Container maxW="container.lg" mt="10">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8">
              <Heading
                as="h1"
                fontSize={{ base: '24px', md: '30px', lg: '36px' }}
                mb={4}
                textTransform="uppercase"
              >
                Some of my Works!
              </Heading>
              <Paragraph props={{ fontSize: 'xl', lineHeight: '1.6' }}>
                Here are some of My Projects.
              </Paragraph>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {projects.map((proj) => {
              return (
                <div key={proj.name}>
                  <div
                    className={`grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 ${borderColor} border rounded-lg overflow-hidden transition-all duration-500 cursor-pointer mb-8 h-auto md:h-[290px] lg:h-[280px] group hover:border-primary`}
                    style={{
                      flexDirection: proj.isLeft ? 'column' : 'column-reverse',
                    }}
                  >
                    <Content proj={proj} />
                    <CoverImage proj={proj} />
                  </div>
                </div>
              );
            })}
          </motion.div>
        </Container>
      </main>
    </>
  );
};

export default ProjectScreen;
