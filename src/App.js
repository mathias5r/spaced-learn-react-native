import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import Navigator from './Navigator';
import themes from './modules/UI/themes';
import client from './services/apollo/client';

const App = () => (
  <ApolloProvider client={client}>
    <ThemeProvider theme={themes}>
      <Navigator />
    </ThemeProvider>
  </ApolloProvider>
);

export default App;
