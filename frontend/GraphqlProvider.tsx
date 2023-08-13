import { PropsWithChildren } from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

const csrfToken = document?.querySelector('meta[name=csrf-token]')?.getAttribute('content');

const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken || '',
    },
  }),
  cache: new InMemoryCache(),
});

type GraphqlProviderProps = PropsWithChildren

export const GraphqlProvider = ({ children }: GraphqlProviderProps) => {
  return (
    <ApolloProvider client={ client }>
      { children }
    </ApolloProvider>
  );
};
