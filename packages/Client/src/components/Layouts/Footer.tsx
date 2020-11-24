import type { FlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

export function Footer(props: FlexProps): JSX.Element {
  return <Flex as="footer" {...props} />;
}
