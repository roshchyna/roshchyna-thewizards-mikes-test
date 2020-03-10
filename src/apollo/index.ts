import ApolloClient from "apollo-boost";
import { URL } from "./config";
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  uri: URL,
  credentials: "include",
  cache: new InMemoryCache(),
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        ...(token ? { "X-Auth-Token": token } : {})
      }
    });
  }
});

export default client;

