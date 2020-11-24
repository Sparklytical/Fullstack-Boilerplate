import { Box, Button, Flex, useToast, Text } from "@chakra-ui/react";
import { InputField } from "components/Elements";
import { Container, Footer, Main, Navbar } from "components/Layouts";
import { Form, Formik } from "formik";
import { useRegisterMutation } from "generated/graphql";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { toErrorMap, withApollo } from "utils";

function Register() {
  const router = useRouter();
  const toast = useToast();
  const [register] = useRegisterMutation();
  return (
    <Container>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Main>
        <Flex mt={20} justify="center">
          <Formik
            initialValues={{
              displayName: "",
              email: "",
              password: "",
              username: "",
            }}
            onSubmit={async (values, { setErrors }) => {
              const response = await register({
                variables: { options: values },
              });
              if (response.data?.register.errors) {
                toast({
                  description: "Unable to create user account.",
                  duration: 9000,
                  isClosable: true,
                  status: "error",
                  title: "An error occurred.",
                });
                setErrors(toErrorMap(response.data.register.errors));
              } else if (response.data?.register.user) {
                toast({
                  description: "We've created your account for you.",
                  duration: 9000,
                  isClosable: true,
                  status: "success",
                  title: "Account created.",
                });
                await router.push("/");
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <InputField
                  name="username"
                  placeholder="Username"
                  label="Username"
                  required
                />

                <Box mt={4}>
                  <InputField
                    name="email"
                    placeholder="Email"
                    label="Email"
                    required
                  />
                </Box>
                <Box mt={4}>
                  <InputField
                    name="password"
                    placeholder="password"
                    label="Password"
                    type="password"
                    required
                  />
                </Box>
                <Button
                  mt={4}
                  type="submit"
                  isLoading={isSubmitting}
                  colorScheme="blue"
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Flex>
      </Main>
      <Footer>
        <Text>Next ❤️ Chakra</Text>
      </Footer>
    </Container>
  );
}

export default withApollo({ ssr: true })(Register);
