import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from './config/constants';
import { RestLink } from 'apollo-link-rest';

export const client = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache(),
});

export const restLink = new RestLink({
  uri: 'http://localhost:3001',
});

