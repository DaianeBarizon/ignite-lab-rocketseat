import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r48mid0k8s01yxdbupb2ln/master',
  cache: new InMemoryCache()
});
