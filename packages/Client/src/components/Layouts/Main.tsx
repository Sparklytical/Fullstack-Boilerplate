import type { StackProps } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";

export function Main(props: StackProps): JSX.Element {
  return (
    <Stack
      spacing="1.5rem"
      width="100%"
      maxWidth="48rem"
      px="1rem"
      mx="auto"
      height="90vh"
      {...props}
    />
  );
}
