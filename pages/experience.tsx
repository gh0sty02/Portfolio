import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  SlideFade,
  Image,
  Text,
  ListItem,
  List,
  ListIcon,
  useColorModeValue,
  Divider,
  useTheme,
  theme,
} from "@chakra-ui/react";
import { BiRightArrow } from "react-icons/bi";
import Paragraph from "components/utils/Paragraph";
import { experience as exp } from "data/experience";

const ExperienceScreen = () => {
  const svgColor = useColorModeValue("teal.500", "cyan.200");
  console.log(theme.config.initialColorMode);
  return (
    <>
      <main>
        <Container maxW="container.lg">
          <SlideFade in={true} offsetY={80}>
            <Box mb={8}>
              <Heading
                as="h1"
                fontSize={{ base: "24px", md: "30px", lg: "36px" }}
                mb={4}
                textTransform="uppercase"
              >
                Places i’ve worked
              </Heading>
              <Paragraph props={{ fontSize: "xl", lineHeight: "1.6" }}>
                Here are Some places where I’ve worked!
              </Paragraph>
            </Box>
          </SlideFade>
          <Box>
            <Divider mb="4" />
            <SlideFade in={true} offsetY={80}>
              <SimpleGrid
                key={exp.id}
                templateColumns={{
                  sm: "1fr",
                  md: "10rem repeat(3, 1fr)",
                  lg: "10rem repeat(3, 1fr)",
                }}
                templateRows={{
                  sm: "repeat(1, 4fr)",
                  md: "repeat(3, 1fr)",
                }}
              >
                <Image
                  w="100px"
                  gridColumn="1"
                  gridRow="1"
                  src={exp.logo}
                  alt={exp.title}
                  mb={{ md: "2" }}
                />

                <Box
                  gridColumnStart={{ sm: 1, md: "2" }}
                  gridColumnEnd={{ sm: 1, md: "5" }}
                  mt={{ sm: 2 }}
                >
                  <Heading as="h2" size="md">
                    {exp.title}
                  </Heading>
                  <Heading as="a" size="lg">
                    #{exp.company}
                  </Heading>
                  <Text fontFamily="Poppins" fontWeight="medium">
                    {exp.duration}
                  </Text>
                </Box>
                <Box
                  gridColumnStart={1}
                  gridColumnEnd={{ sm: 1, md: "5" }}
                  gridRowStart={{ sm: 3, md: 2 }}
                  gridRowEnd="5"
                >
                  <List pt="4">
                    {exp.description.map((desc) => {
                      return (
                        <ListItem
                          fontFamily="Poppins"
                          mb="1"
                          key={exp.id + desc + ""}
                          fontSize="md"
                          display="flex"
                          alignItems="center"
                          justifyContent="flex-start"
                        >
                          <ListIcon
                            as={BiRightArrow}
                            color={svgColor}
                            display="block"
                            fontSize="20px"
                          />
                          <Text as="span" display="block" variant="description">
                            {desc}
                          </Text>
                        </ListItem>
                      );
                    })}
                  </List>
                </Box>
              </SimpleGrid>
            </SlideFade>
          </Box>
        </Container>
      </main>
    </>
  );
};

export default ExperienceScreen;
