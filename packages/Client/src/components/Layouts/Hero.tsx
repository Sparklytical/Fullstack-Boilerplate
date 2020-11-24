import { Flex, Heading } from "@chakra-ui/react";

export function Hero({ title }: { title: string }): JSX.Element {
  return (
    <Flex>
      <Heading fontSize="2vw">{title}</Heading>
    </Flex>
  );
}

Hero.defaultProps = {
  title: "FullStack Boilerplate",
};
