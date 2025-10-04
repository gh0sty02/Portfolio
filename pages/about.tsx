/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Heading,
  LightMode,
  SlideFade,
  Tag,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Paragraph from 'components/utils/Paragraph';
import Head from 'next/head';

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
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: '28px', md: '32px', lg: '36px' }}
                mb={4}
                textTransform="uppercase"
              >
                About Me
              </Heading>
              <Collapse in={show} startingHeight={100}>
                <Paragraph props={{ fontSize: 'xl', lineHeight: '1.6' }}>
                  I’m a Software Engineer passionate about building scalable,
                  high-performance web applications. I specialize in React,
                  Next.js, and Node.js, combining clean architecture with
                  practical problem-solving to deliver robust, production-ready
                  solutions. I enjoy optimizing performance, simplifying complex
                  UIs, and creating experiences that make a real impact. Outside
                  of coding, I’m an avid gym-goer, love playing guitar, video
                  games, football, and cricket, and I never miss a chance to
                  spend time petting my cat.
                </Paragraph>
              </Collapse>
              <LightMode>
                <Button
                  size="sm"
                  onClick={() => setShow(!show)}
                  mt="1rem"
                  colorScheme="green"
                  bg="green.500"
                >
                  Show {show ? 'Less' : 'More'}
                </Button>
              </LightMode>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
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
          </SlideFade>
        </Container>
      </main>
    </>
  );
};

export default AboutScreen;
