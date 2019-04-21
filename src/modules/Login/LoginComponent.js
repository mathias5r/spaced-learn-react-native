import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { useNavigation } from 'react-navigation-hooks';
import FormInputComponent from './FormInputComponent';
import LoginButtonComponent from './LoginButtonComponent';
import { t } from '../../locales/index';
import { loginValidationSchema, doLoginRequest } from './LoginServices';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const FormikView = styled.View`
  flex: 1;
  width: 100%;
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

const LoginComponent = () => {
  const [isLoginLoadingShown, setLoginLoadingVisibility] = useState(false);
  const { navigate } = useNavigation();
  return (
    <Container>
      <Formik
        onSubmit={values => {
          setLoginLoadingVisibility(true);
          doLoginRequest({ values, setLoginLoadingVisibility, navigate });
        }}
        validationSchema={loginValidationSchema}
        render={({ handleChange, errors, handleSubmit }) => {
          return (
            <FormikView>
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
              <LoginButtonComponent
                onPress={handleSubmit}
                text="Login"
                showLoading={isLoginLoadingShown}
              />
            </FormikView>
          );
        }}
      />
    </Container>
  );
};

export default LoginComponent;
