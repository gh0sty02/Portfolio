/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Heading,
  Text,
  Link,
  SlideFade,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import Paragraph from 'components/utils/Paragraph';
import { FaEnvelope } from 'react-icons/fa';
import { IoNewspaper } from 'react-icons/io5';

const Profile = () => {
  return (
    <>
      <SlideFade in={true} offsetY={80}>
        <Box>
          <Heading
            as="h1"
            fontSize={{ base: '28px', md: '40px', lg: '48px' }}
            mb={2}
          >
            {"Hey, I'm Pranay Yadav."}
          </Heading>
          <Text fontFamily="Poppins" fontWeight="light" mb="4">
            Or you could call me ghosty. That works too . . .
          </Text>
          <Paragraph
            props={{
              fontSize: '2xl',
              lineHeight: '1.6',
              marginBottom: '4',
            }}
          >
            Full Stack Web Developer skilled in JavaScript, React, Node.js, and
            TypeScript. Welcome to my personal website - thanks for stopping by!
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
              target="_blank"
              as="a"
              colorScheme="green"
              size="lg"
              bg="green.500"
              href={process.env.NEXT_PUBLIC_RESUME_LINK}
              borderRadius={5}
              py={3}
              px="6"
              leftIcon={<IoNewspaper />}
            >
              Resume
            </Button>
          </ButtonGroup>
        </Box>
      </SlideFade>
    </>
  );
};

export default Profile;
