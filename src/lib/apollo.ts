import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-west-2.graphcms.com/v2/cl4pxotih2iti01xtf5it8717/master",
  cache: new InMemoryCache(),
});
