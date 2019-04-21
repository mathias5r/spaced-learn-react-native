import gql from 'graphql-tag';
import * as Yup from 'yup';
import apolloClient from '../../services/apollo/client';

export const loginValidationSchema = () =>
  Yup.object().shape({
    user: Yup.string().required(`empty_user`),
    password: Yup.string()
      .required(`empty_password`)
      .min(4, `min_password`),
  });

const LOGIN = gql`
  mutation($email: String!, $password: String!) {
    Login(email: $email, password: $password)
  }
`;

export const makeLoginRequest = async () => {
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
