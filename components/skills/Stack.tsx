import { SlideFade, Heading, Grid, Tooltip, Box } from "@chakra-ui/react";
import { RiCupFill } from "react-icons/ri";
import React from "react";
import { tools } from "data/Tools";
import Card from "components/utils/Card";
import { FaExternalLinkAlt } from "react-icons/fa";

type ISkillSetModal = {
  onOpen(): void;
};

const TechStack = ({ onOpen }: ISkillSetModal) => {
  return (
    <SlideFade in={true} offsetY={80} delay={0.2}>
      <Heading
        as="h1"
        fontSize={{ base: "24px", md: "30px", lg: "36px" }}
        mb={3}
      >
        Primary Stack & Technologies
      </Heading>
      <Box fontSize="xl" lineHeight="1.6">
        As a full-stack web developer there are lot of tools that I use on daily
        basis, Here are few tools that are my cup of{" "}
        <Tooltip
          hasArrow
          label="I drink a lot of tea"
          bg="gray.300"
          background="#232323"
          color="white"
          fontWeight="medium"
          fontFamily="Poppins"
        >
          <p style={{ display: "inline", color: "#38A169" }}>Tea</p>
        </Tooltip>{" "}
        {
          <RiCupFill
            style={{
              display: "inline-block",
              marginLeft: "2px",
              transform: "translateY(3px)",
            }}
          />
        }
      </Box>
      <Grid
        mt={10}
        templateColumns={["1fr", "1fr", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={5}
      >
        {tools.map((tool) => (
          <Card tool={tool} key={tool?.name} />
        ))}
      </Grid>
      <Box as="button" onClick={onOpen} color="green.500" mt="4">
        See my full Arsenel{" "}
        {<FaExternalLinkAlt style={{ display: "inline", marginLeft: "4px" }} />}{" "}
      </Box>
    </SlideFade>
  );
};

export default TechStack;
