import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import { ENDPOINTS } from '../../constants';

const cache = new InMemoryCache();

const errorLink = onError((networkError, graphQLErrors) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
    );
  }
  if (networkError) {
    console.log(`[Network error]:`, networkError);
  }
});

const link = ApolloLink.from([errorLink, new HttpLink({ uri: ENDPOINTS.GRAPHQL })]);

export default new ApolloClient({
  link,
  cache,
});
