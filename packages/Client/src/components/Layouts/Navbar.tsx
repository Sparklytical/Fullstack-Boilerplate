import { Flex, Heading, Text } from "@chakra-ui/react";
import { DarkModeSwitch } from "components/Modules";
import NextLink from "next/link";

export function Navbar(): JSX.Element {
  return (
    <Flex
      zIndex={1}
      position="sticky"
      top={0}
      backgroundColor="teal.300"
      p={3}
      w="100%"
      justifyContent="space-between"
    >
      <NextLink href="/">
        <Heading>Boilerplate</Heading>
      </NextLink>
      <Flex align="center">
        <NextLink href="/register">
          <Text mr={5}>Register</Text>
        </NextLink>
        <DarkModeSwitch />
      </Flex>
    </Flex>
  );
}
