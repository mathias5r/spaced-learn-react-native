import gql from 'graphql-tag';
import { compose, withState } from 'recompose';
import LoginComponent from './LoginComponent';
import apolloClient from '../../services/apollo/client';
import withFormik from './LoginFormik';

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    Login(email: $email, password: $password)
  }
`;

const makeLoginRequest = async () => {
  const { data } = await apolloClient.mutate({
    mutation: LOGIN,
    variables: {
      email: `mathiassilva4@gmail.com`,
      password: `12345`,
    },
    fetchPolicy: `no-cache`,
  });
  return data;
};

const onLoginPress = () => {
  makeLoginRequest();
};

export default compose(
  withFormik({
    handleSubmit: onLoginPress,
    displayName: `LoginForm`,
  }),
)(LoginComponent);
