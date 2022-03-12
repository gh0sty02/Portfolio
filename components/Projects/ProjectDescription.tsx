import {
  Stack,
  Box,
  Heading,
  Divider,
  Button,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Paragraph from "components/utils/Paragraph";
import { IProjects } from "data/Projects";
import React, { FC } from "react";

const Content: FC<{ proj: IProjects }> = ({ proj }) => {
  const bgColor = useColorModeValue("#e4e9ed", "#252525");
  return (
    <Stack
      py="2"
      px="6"
      alignItems="center"
      gridRowStart={{ base: "2", md: "1", lg: "1" }}
      gap={2}
      background={bgColor}
      justifyContent="center"
    >
      <Box alignSelf="flex-start">
        <Text
          display="inline"
          fontSize="lg"
          fontFamily="Poppins"
          fontWeight="medium"
          mr={2}
          color="#595959"
        >
          #{proj.id}
        </Text>
        <Heading
          as="h2"
          fontFamily="Poppins"
          letterSpacing="2px"
          display="inline"
          fontWeight="medium"
        >
          {proj.name}
        </Heading>
      </Box>
      <Divider my={1} />
      <Paragraph>{proj.description}</Paragraph>

      <Button
        as="a"
        target="_blank"
        href={proj.link}
        size="md"
        width="auto"
        variant="outline"
        justifySelf="flex-end"
        mb={2}
        borderColor={useColorModeValue("#121212", "#edf2f7")}
      >
        View Project{" "}
      </Button>
    </Stack>
  );
};

export default Content;
