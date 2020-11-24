import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const fonts = { mono: `'Menlo', monospace` };

const theme = extendTheme({
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
  },
  fonts,
  textStyles: {
    chapText: {
      fontFamily: "'Menlo', monospace",
    },
  },
});

export default theme;
