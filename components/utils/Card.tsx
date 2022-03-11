import {
  Box,
  Heading,
  IconButton,
  LinkOverlay,
  LinkBox,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { FC, ReactElement } from "react";
import Paragraph from "./Paragraph";

interface ITool {
  url: string;
  name: string;
  icon: ReactElement;
  description: string;
}

const Card: FC<{ tool: ITool }> = ({ tool }) => {
  return (
    <LinkBox as="article">
      <Flex
        w="100%"
        borderColor={useColorModeValue("gray.300", "gray.700")}
        borderRadius={5}
        borderWidth="1px"
        role="group"
        _hover={{
          borderColor: "green.500",
        }}
        p="4"
        transition="0.5s"
        cursor="pointer"
      >
        <IconButton
          mr={3}
          href={tool.url}
          as="a"
          target="_blank"
          _groupHover={{ color: "green.500" }}
          icon={tool.icon}
          aria-label={tool.name}
          rel="noopener"
        />
        <Box>
          <LinkOverlay rel="noopener" isExternal href={tool.url}>
            <Heading as="h2" size="sm">
              {tool.name}
            </Heading>
            <Paragraph props={{ mt: "1", fontSize: "sm" }}>
              {tool.description}
            </Paragraph>
          </LinkOverlay>
        </Box>
      </Flex>
    </LinkBox>
  );
};

export default Card;
