import React from 'react';
import styled from 'styled-components';
import FormInputComponent from './FormInputComponent';
import LoginButtonComponent from './LoginButtonComponent';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FormView = styled.View`
  width: 80%;
  margin-bottom: 50;
`;

const LoginComponent = () => (
  <Container>
    <FormView>
      <FormInputComponent type="email" placeholder="E-mail" />
      <FormInputComponent type="password" placeholder="Senha" />
    </FormView>
    <LoginButtonComponent text="Login" />
  </Container>
);

LoginComponent.propTypes = {};

export default LoginComponent;
