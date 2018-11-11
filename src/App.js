import React from 'react';
import { ThemeProvider } from 'styled-components';
import Navigator from './Navigator';
import themes from './modules/UI/themes';

const App = () => (
  <ThemeProvider theme={themes}>
    <Navigator />
  </ThemeProvider>
);

export default App;
