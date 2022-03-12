import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  SlideFade,
  Stack,
  Image,
  Button,
  useColorModeValue,
  SimpleGrid,
  Flex,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import Paragraph from "components/utils/Paragraph";
import React from "react";
import { projects } from "data/Projects";
import Link from "next/link";
import { motion } from "framer-motion";
import { DURATIONS, easing } from "config/animations";
import Content from "components/Projects/ProjectDescription";
import CoverImage from "components/Projects/CoverImage";

const ProjectScreen = () => {
  const borderColor = useColorModeValue("gray.300", "gray.700");

  return (
    <>
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
            </Box>

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
