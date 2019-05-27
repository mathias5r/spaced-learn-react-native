import React, { useState } from 'react';
import { Image } from 'react-native';
import styled from 'styled-components';
import { Formik } from 'formik';
import { useNavigation } from 'react-navigation-hooks';
import FormInputComponent from './FormInputComponent';
import LoginButtonComponent from './LoginButtonComponent';
import { t } from '../../locales/index';
import { loginValidationSchema, doLoginRequest } from './LoginServices';
import StudyIcon from '../../assets/icons/study_icon.png';

const Container = styled.View`
  flex: 1;
  justify-content: space-around;
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

const ErrorView = styled.View`
  padding: 20px;
`;

const PositioningView = styled.View`
  flex: 0.5;
  width: 100%;
`;

const LogoView = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

const LoginComponent = () => {
  const [isLoginLoadingShown, setLoginLoadingVisibility] = useState(false);
  const [loginErrorAlert, setLoginErrorAlert] = useState(false);
  const { navigate } = useNavigation();
  return (
    <Container>
      <LogoView>
        <Image source={StudyIcon} style={{ width: 120, height: 120 }} />
      </LogoView>
      <PositioningView>
        <Formik
          onSubmit={values => {
            doLoginRequest({ values, setLoginLoadingVisibility, setLoginErrorAlert, navigate });
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
                <ErrorView>
                  {loginErrorAlert && <AlertText>{t(loginErrorAlert)}</AlertText>}
                </ErrorView>
                <LoginButtonComponent
                  onPress={handleSubmit}
                  text="Login"
                  showLoading={isLoginLoadingShown}
                />
              </FormikView>
            );
          }}
        />
      </PositioningView>
    </Container>
  );
};

export default LoginComponent;
