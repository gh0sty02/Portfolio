import NextLink from "next/link";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const Link: FC<{
  href: string;
  currentPath?: string;
  props: {};
  children: ReactNode;
}> = ({ children, href, currentPath, props }) => {
  const useColorMode = useColorModeValue("gray.100", "gray.700");
  return (
    <NextLink href={href} passHref>
      <ChakraLink
        as="span"
        bg={href === currentPath ? useColorMode : "transparent"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
        {...props}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default Link;
