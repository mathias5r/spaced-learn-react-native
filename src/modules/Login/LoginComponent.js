import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FormInputComponent from './FormInputComponent';
import LoginButtonComponent from './LoginButtonComponent';
import { t } from '../../locales/index';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FormView = styled.View`
  width: 80%;
  margin-bottom: 50;
`;

const InputView = styled.View``;

const AlertText = styled.Text`
  padding-top: 5;
  padding-left: 10;
  color: red;
`;

const LoginComponent = ({ handleSubmit, handleChange, errors, isLoginLoadingShown }) => (
  <Container>
    <FormView>
      <InputView>
        <FormInputComponent placeholder="Usuário" onChangeText={handleChange(`user`)} />
        {errors.user && <AlertText>{t(errors.user)}</AlertText>}
      </InputView>
      <InputView>
        <FormInputComponent
          placeholder="Senha"
          onChangeText={handleChange(`password`)}
          isSecureText
        />
        {errors.password && <AlertText>{t(errors.password)}</AlertText>}
      </InputView>
    </FormView>
    <LoginButtonComponent onPress={handleSubmit} text="Login" showLoading={isLoginLoadingShown} />
  </Container>
);

LoginComponent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.shape({}).isRequired,
  isLoginLoadingShown: PropTypes.bool.isRequired,
};

export default LoginComponent;
