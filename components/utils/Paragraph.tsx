import { Text, useColorModeValue } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

const Paragraph: FC<{ children: ReactNode; props: any }> = ({
  children,
  props,
}) => {
  const textColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Text color={textColor} {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;
