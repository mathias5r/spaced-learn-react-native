import { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import apolloClient from '../../services/apollo/client';

const LOGIN = gql`
  mutation($email: String!, $password: String!, $credentials: String!) {
    Login(email: $email, password: $password, credentials: $credentials)
  }
`;

export default () => {
  const [loginString, updateLoginString] = useState(``);
  useEffect(async () => {
    const loginResult = await apolloClient.mutate({
      mutation: LOGIN,
      variables: { email: `mathiassilva4@gmail.com`, password: `teste`, credentials: `teste` },
      fetchPolicy: `no-cache`,
    });
    updateLoginString(loginResult);
  });
};
