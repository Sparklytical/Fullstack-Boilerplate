import type { FlexProps } from "@chakra-ui/react";
import { Flex, useColorMode } from "@chakra-ui/react";

export function Container(props: FlexProps): JSX.Element {
  const { colorMode } = useColorMode();

  const bgColor = { dark: "gray.900", light: "gray.50" };

  const color = { dark: "white", light: "black" };
  return (
    <Flex
      direction="column"
      // alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
}
