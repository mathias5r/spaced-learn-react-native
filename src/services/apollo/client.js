import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ENDPOINTS } from '../../constants';

const cache = new InMemoryCache();

const errorLink = onError(errors => {
  console.log(errors);
});

const link = ApolloLink.from([errorLink, createHttpLink({ uri: ENDPOINTS.GRAPHQL })]);

export default new ApolloClient({
  link,
  cache,
});
