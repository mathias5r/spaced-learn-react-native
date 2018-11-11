import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import FormInputComponent from './FormInputComponent';

const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FormView = styled.View`
  width: 80%;
`;

const LoginComponent = () => (
  <Container colors={[`#8a2387`, `#e94057`, `#f27121`]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
    <FormView>
      <FormInputComponent type="email" placeholder="E-mail" />
      <FormInputComponent type="password" placeholder="Senha" />
    </FormView>
  </Container>
);

LoginComponent.propTypes = {};

export default LoginComponent;
