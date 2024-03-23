import { GraphQLClient } from "graphql-request";

const gqlClient = new GraphQLClient(
  "https://rickandmortyapi.com/graphql"
);

export default gqlClient;
