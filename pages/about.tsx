/* eslint-disable react/no-unescaped-entities */
import { Container } from '@/components/ui/container';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Tag } from '@/components/ui/tag';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import Paragraph from 'components/utils/Paragraph';
import Head from 'next/head';
import { motion } from 'framer-motion';

const coolStuff = [
  'React',
  'Javascript',
  'Science',
  'Illustration',
  'AI',
  'Space',
  'Video Games',
  'Movies',
  'Sports',
  'Books',
  'Tea',
];

const AboutScreen = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Head>
        <title>Pranay Yadav | About</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
            <div>
              <Heading
                as="h1"
                fontSize={{ base: '28px', md: '32px', lg: '36px' }}
                mb={4}
                textTransform="uppercase"
              >
                About Me
              </Heading>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: show ? '1000px' : '100px' }}
              >
                <Paragraph props={{ fontSize: 'xl', lineHeight: '1.6' }}>
                  I'm a Software Engineer passionate about building scalable,
                  high-performance web applications. I specialize in React,
                  Next.js, and Node.js, combining clean architecture with
                  practical problem-solving to deliver robust, production-ready
                  solutions. I enjoy optimizing performance, simplifying complex
                  UIs, and creating experiences that make a real impact. Outside
                  of coding, I'm an avid gym-goer, love playing guitar, video
                  games, football, and cricket, and I never miss a chance to
                  spend time petting my cat.
                </Paragraph>
              </div>
              <Button
                size="sm"
                onClick={() => setShow(!show)}
                className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Show {show ? 'Less' : 'More'}
              </Button>
            </div>
            <Divider my={10} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading
              as="h1"
              fontSize={{ base: '24px', md: '30px', lg: '36px' }}
              mb={3}
            >
              Cool Stuff
            </Heading>
            <Paragraph props={{ fontSize: 'xl', lineHeight: '1.6' }}>
              {coolStuff.map((item) => (
                <Tag
                  size="lg"
                  colorScheme="green"
                  key={item}
                  marginY={2}
                  marginRight={2}
                >
                  {item}
                </Tag>
              ))}
            </Paragraph>
          </motion.div>
        </Container>
      </main>
    </>
  );
};

export default AboutScreen;
