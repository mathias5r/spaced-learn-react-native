import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import theme from '../UI/themes';
import LoginComponent from './LoginComponent';

const mockProps = {
  handleLoginRequest: action(`handleLoginRequest`),
};

storiesOf(`ConfirmComponent`, module)
  .addDecorator(getStory => <ThemeProvider theme={theme}>{getStory()}</ThemeProvider>)
  .add(`Initial`, () => <LoginComponent {...mockProps} />);
