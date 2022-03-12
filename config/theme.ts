import {
  ChakraTheme,
  extendTheme,
  ThemeComponentProps,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: true,
};

const textVariants = {
  emphasis: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode("teal.500", "cyan.200")(props),
  }),
  description: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode("gray.800", "gray.400")(props),
  }),
  accent: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode("black.400", "cyan.200")(props),
  }),
  accentAlternative: (props: ThemeComponentProps<ChakraTheme>) => ({
    color: mode("#595959", "#A6A6A6")(props),
  }),
};

const styles = {
  // @ts-ignore
  global: (props) => ({
    body: {
      bg: mode("gray.100", "#121212")(props),
    },
    fonts: {
      Text: "Poppins",
    },
    components: {
      Link: {
        baseStyle: (props: ThemeComponentProps<ChakraTheme>) => ({
          color: mode("teal.500", "cyan.200")(props),
        }),
        variants: {
          ...textVariants,
          description: (props: ThemeComponentProps<ChakraTheme>) => ({
            color: mode("gray.800", "gray.400")(props),
            _hover: {
              color: mode("teal.500", "cyan.200")(props),
              textDecoration: "none",
            },
          }),
        },
      },
    },
  }),
};

const theme = extendTheme({ ...config, styles });

export default theme;
