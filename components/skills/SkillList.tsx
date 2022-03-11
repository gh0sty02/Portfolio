import {
  useColorModeValue,
  Heading,
  Divider,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import { Skill } from "data/Skills";

const SkillList = ({
  title,
  columns,
}: {
  title: string;
  columns: Skill[][];
}) => {
  const emphasis = useColorModeValue("teal.500", "cyan.200");
  const [colOne, colTwo = []] = columns;
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid
        fontFamily="Poppins"
        columns={2}
        spacing={4}
        paddingBottom={6}
      >
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  );
};

export default SkillList;
