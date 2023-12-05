import {
  Box,
  Container,
  Heading,
  SlideFade,
  useColorModeValue,
  SimpleGrid,
  Text,
  Link,
} from "@chakra-ui/react";
import Paragraph from "components/utils/Paragraph";
import React from "react";
import { getProjects } from "data/Projects";
import Content from "components/Projects/ProjectDescription";
import CoverImage from "components/Projects/CoverImage";
import Head from "next/head";

const ProjectScreen = () => {
  const borderColor = useColorModeValue("gray.300", "gray.700");
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
          <SlideFade in={true} offsetY={80}>
            <Box mb={8}>
              <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={4}
                textTransform="uppercase"
              >
                Some of my Works!
              </Heading>
              <Paragraph props={{ fontSize: "xl", lineHeight: "1.6" }}>
                Here are some of My Projects.
              </Paragraph>
              <Text fontSize="xs">
                Some links might not work as the projects were hosted on
                Heroku`s free tier, which is no longer available. However, you
                can still access the code on{" "}
                <Link
                  color="teal.500"
                  href="https://github.com/gh0sty02/"
                  isExternal
                >
                  Github
                </Link>
                {/* <Link href="https://github.com/gh0sty02/">Github</Link>. */}
              </Text>
            </Box>
          </SlideFade>
          <SlideFade delay={0.2} in={true} offsetY={80}>
            {projects.map((proj) => {
              return (
                <Box key={proj.name}>
                  <SimpleGrid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    templateRows={{ base: "1fr 1fr", md: "1" }}
                    borderColor={borderColor}
                    borderRadius="lg"
                    borderWidth="1px"
                    role="group"
                    _hover={{
                      borderColor: "green.500",
                    }}
                    h={{ sm: "auto", md: "290px", lg: "280px" }}
                    transition="0.5s"
                    cursor="pointer"
                    mb={8}
                    flexDir={`${proj.isLeft ? "column" : "column-reverse"}`}
                    overflow="-moz-hidden-unscrollable"
                  >
                    <Content proj={proj} />

                    <CoverImage proj={proj} />
                  </SimpleGrid>
                </Box>
              );
            })}
          </SlideFade>
        </Container>
      </main>
    </>
  );
};

export default ProjectScreen;
