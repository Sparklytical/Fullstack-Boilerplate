import {
  Code,
  Link as ChakraLink,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Container, Footer, Hero, Main, Navbar } from "components/Layouts";
import Head from "next/head";
import { withApollo } from "utils";

function Index(): JSX.Element {
  return (
    <Container height="100vh">
      <Head>
        <title>Full Stack Boilerplate</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Main>
        <Text>
          Full Stack Boilerplate's Example Repo of <Code>Next.js</Code> +{" "}
          <Code>chakra-ui</Code> + <Code>typescript</Code> + <Code>apollo</Code>{" "}
          + <Code>graphql-codegen</Code>
        </Text>
        {/* <DarkModeSwitch /> */}
        <Hero />
        <List spacing={3} my={0}>
          <ListItem>
            <ChakraLink
              isExternal
              href="https://github.com/Sparklytical/Fullstack-Boilerplate"
              flexGrow={1}
              mr={2}
            >
              Repo
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              isExternal
              href="https://chakra-ui.com"
              flexGrow={1}
              mr={2}
            >
              Chakra UI
            </ChakraLink>
          </ListItem>
          <ListItem>
            <ChakraLink
              isExternal
              href="https://nextjs.org"
              flexGrow={1}
              mr={2}
            >
              Next.js
            </ChakraLink>
          </ListItem>
        </List>
      </Main>

      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
    </Container>
  );
}

export default withApollo({ ssr: true })(Index);
