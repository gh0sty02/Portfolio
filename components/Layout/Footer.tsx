import {
  Box,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "components/utils/Logo";
import { FaGithub } from "react-icons/fa";
import { socials } from "data/Socials";

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Container maxW="container.lg">
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
          pb="5"
        >
          <Logo />
          <ButtonGroup variant="ghost">
            {socials.map((social) => (
              <IconButton
                _hover={{ color: "green.500" }}
                icon={social.icon}
                as="a"
                href={social.href}
                aria-label={social.name}
                key={social.name}
              />
            ))}
          </ButtonGroup>
        </Stack>
        <Divider pt={2} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          pt="5"
        >
          <Text fontSize="md">
            Pranay Yadav &copy; {new Date().getFullYear()}{" "}
          </Text>
          <IconButton
            as={Link}
            isExternal
            rounded="md"
            icon={<FaGithub fontSize="18px" />}
            aria-label="Github"
            href="https://github.com/gh0sty02/"
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
