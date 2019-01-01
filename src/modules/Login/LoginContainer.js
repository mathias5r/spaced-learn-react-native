import gql from 'graphql-tag';
import { compose, withHandlers } from 'recompose';
import LoginComponent from './LoginComponent';
import apolloClient from '../../services/apollo/client';

const LOGIN = gql`
  mutation($email: String!, $password: String!, $credentials: String!) {
    Login(email: $email, password: $password, credentials: $credentials)
  }
`;

const makeLoginRequest = async () => {
  const createLoginRequest = await apolloClient.mutate({
    mutation: LOGIN,
    variables: {
      email: `mathiassilva4@gmail.com`,
      password: `senha`,
      credentials: `credenciais`,
    },
    fetchPolicy: `no-cache`,
  });
  console.log(createLoginRequest.data);
};

const handleLoginRequest = () => () => {
  console.log(`handleLoginRequest`);
  makeLoginRequest();
};

export default compose(
  withHandlers({
    handleLoginRequest,
  }),
)(LoginComponent);
