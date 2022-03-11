import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Stack,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "./utils/Link";
import React from "react";
import { links } from "../data/NavLinks";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  let { asPath } = router;
  const navItem = links.map((link) => (
    <Link
      href={link!.href}
      currentPath={asPath}
      key={link!.name}
      props={{
        rounded: "md",
        p: "2",
      }}
    >
      {link!.name}
    </Link>
  ));

  return (
    <>
      <Box py={5} borderTop="2px" borderTopColor="green.500">
        <Container maxW={"container.lg"}>
          <Flex justifyContent="space-between" h="16" alignItems="center">
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: !isOpen ? "none" : "inherit" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems="center">
              <Box>
                <Logo />
              </Box>

              <HStack
                as="nav"
                spacing="4"
                display={{ base: "none", md: "flex" }}
              >
                {navItem}
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Button aria-label="Switch Theme" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>
          {isOpen ? (
            <Box pb={4} mt={3}>
              <Stack as={"nav"} spacing={4}>
                {navItem}
              </Stack>
            </Box>
          ) : null}
        </Container>
      </Box>
    </>
  );
};

export default NavBar;
