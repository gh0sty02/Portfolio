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
} from "@chakra-ui/react";
import React, { useState } from "react";
import Paragraph from "components/utils/Paragraph";

const coolStuff = [
  "React",
  "Javascript",
  "Science",
  "Illustration",
  "AI",
  "Space",
  "Video Games",
  "Movies",
  "Sports",
  "Books",
  "Tea",
];

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <main>
        <Container maxW="container.lg" mt="10">
          <SlideFade in={true} offsetY={80}>
            <Box>
              <Heading
                as="h1"
                fontSize={{ base: "28px", md: "32px", lg: "36px" }}
                mb={4}
                textTransform="uppercase"
              >
                About Me
              </Heading>
              <Collapse in={show} startingHeight={100}>
                <Paragraph props={{ fontSize: "xl", lineHeight: "1.6" }}>
                  I'm in my Final Year of Graduation of Bachelor's Degree
                  specializing in Computer Science. I specializes in Full Stack
                  Web Development and recently I've found myself studying UI/UX
                  too. I had this wierd curiosity for Computers and their
                  technologies since I was a child, so here I am, Learning,
                  Exploring and Building Projects around the domain I love!
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
                  Show {show ? "Less" : "More"}
                </Button>
              </LightMode>
            </Box>
            <Divider my={10} />
          </SlideFade>
          <SlideFade in={true} offsetY={80} delay={0.2}>
            <Heading
              as="h1"
              fontSize={{ base: "24px", md: "30px", lg: "36px" }}
              mb={3}
            >
              Cool Stuff
            </Heading>
            <Paragraph props={{ fontSize: "xl", lineHeight: "1.6" }}>
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

export default About;
