import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { API_URL, REST_API_URL } from './config/constants';
import { RestLink } from 'apollo-link-rest';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: API_URL,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('access_token');

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const restLink = new RestLink({
  uri: REST_API_URL,
});
