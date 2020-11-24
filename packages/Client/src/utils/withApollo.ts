import { ApolloClient, InMemoryCache } from "@apollo/client";
import type { NextPageContext } from "next";
import { withApollo as createWithApollo } from "next-apollo";

import type { TypedTypePolicies } from "../generated/graphql";

const typePolicies: TypedTypePolicies = {
  /*
For more info about TypedTypePolicies look here - https://graphql-code-generator.com/docs/plugins/typescript-apollo-client-helpers
*/
};

const createClient = (ctx?: NextPageContext) =>
  new ApolloClient({
    cache: new InMemoryCache({ typePolicies }),
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) ?? "",
    },
    uri: process.env.URI,
  });

export const withApollo = createWithApollo(createClient);
