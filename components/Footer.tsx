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
import Logo from "./Logo";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaHeart,
} from "react-icons/fa";

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
            <IconButton
              icon={<FaTwitter />}
              aria-label="Twitter"
              as="a"
              href="https://twitter.com/Pranayyadav08"
            />
            <IconButton
              icon={<FaLinkedin />}
              aria-label="LinkedIn"
              as="a"
              href="https://www.linkedin.com/in/pranayyadav02/"
            />
            <IconButton
              icon={<FaInstagram />}
              aria-label="Instagram"
              as="a"
              href="https://www.instagram.com/pranayy02/"
            />
            <IconButton
              icon={<FaGithub />}
              aria-label="Github"
              as="a"
              href="https://github.com/gh0sty02/"
            />
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
