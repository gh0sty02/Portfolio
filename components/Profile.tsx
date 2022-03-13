/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Heading,
  Text,
  Link,
  SlideFade,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import Paragraph from "components/utils/Paragraph";
import { FaEnvelope } from "react-icons/fa";
import { IoNewspaper } from "react-icons/io5";

const Profile = () => {
  return (
    <>
      <SlideFade in={true} offsetY={80}>
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: "28px", md: "40px", lg: "48px" }}
            mb={2}
          >
            {"Hey, I'm Pranay Yadav."}
          </Heading>
          <Text fontFamily="Poppins" fontWeight="light" mb="4">
            Or you could call me ghosty. That works too . . .
          </Text>
          <Paragraph
            props={{
              fontSize: "2xl",
              lineHeight: "1.6",
              marginBottom: "4",
            }}
          >
            Final Year Computer Science Student, specializing full Stack Web
            Development, focused on{" "}
            <Link
              href="https://www.javascript.info"
              color="green.500"
              fontWeight="500"
              isExternal
            >
              Javascript
            </Link>
            {", "}
            <Link
              href="https://reactjs.org/"
              color="green.500"
              fontWeight="500"
              isExternal
            >
              React
            </Link>
            {", "}
            <Link
              href="https://nodejs.org/en/"
              color="green.500"
              fontWeight="500"
              isExternal
            >
              Node
            </Link>
            {" and "}
            <Link
              href="https://www.typescriptlang.org/"
              color="green.500"
              fontWeight="500"
              isExternal
            >
              TypeScript
            </Link>
            {". "}
            Thank you for visiting my Personal website!
          </Paragraph>
          <ButtonGroup mb="-4" gap="4">
            <Button
              size="lg"
              colorScheme="green"
              bg="green.500"
              href="mailto:pranayyadav08@gmail.com"
              borderRadius={5}
              py={3}
              px="6"
              as="a"
              leftIcon={<FaEnvelope />}
            >
              Mail
            </Button>

            <Button
              colorScheme="green"
              size="lg"
              bg="green.500"
              href="https://drive.google.com/file/d/1qii8GCWtdQh-ETpZCdjDD35__RX1h3rL/view?usp=sharing"
              borderRadius={5}
              py={3}
              px="6"
              as="a"
              leftIcon={<IoNewspaper />}
            >
              <a
                href="https://drive.google.com/file/d/1qii8GCWtdQh-ETpZCdjDD35__RX1h3rL/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </Button>
          </ButtonGroup>
        </Box>
      </SlideFade>
    </>
  );
};

export default Profile;
