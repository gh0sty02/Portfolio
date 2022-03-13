import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  useSystemColorMode: true,
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
  }),
};

const theme = extendTheme({ ...config, styles });

export default theme;
