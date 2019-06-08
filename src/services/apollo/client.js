import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import fetch from 'cross-fetch';
import { setContext } from 'apollo-link-context';
import { ENDPOINTS } from '../../constants';
import { getItem } from '../storage';

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

const authLink = setContext(async () =>
  getItem({ key: `token` }).then(token => {
    return {
      headers: {
        authorization: token || ``,
      },
    };
  }),
);

const link = ApolloLink.from([
  errorLink,
  authLink,
  new HttpLink({ uri: ENDPOINTS.GRAPHQL, fetch }),
]);

export default new ApolloClient({
  link,
  cache,
});
