/* eslint-disable react/no-unescaped-entities */
import { Box, Heading, Text, Link, SlideFade } from "@chakra-ui/react";
import Paragraph from "components/utils/Paragraph";

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
        </Box>
      </SlideFade>
    </>
  );
};

export default Profile;
