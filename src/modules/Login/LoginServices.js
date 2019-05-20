import gql from 'graphql-tag';
import * as Yup from 'yup';
import { not, isEmpty } from 'ramda';
import apolloClient from '../../services/apollo/client';
import { saveItem, getItem } from '../../services/storage';

export const loginValidationSchema = () =>
  Yup.object().shape({
    user: Yup.string().required(`empty_user`),
    password: Yup.string()
      .required(`empty_password`)
      .min(4, `min_password`),
  });

const LOGIN = gql`
  mutation($user: String!, $password: String!) {
    Login(user: $user, password: $password) {
      value
      token
    }
  }
`;

const makeLoginRequest = async ({ user, password }) => {
  const { data } = await apolloClient.mutate({
    mutation: LOGIN,
    variables: {
      user: user.toLowerCase(),
      password,
    },
    fetchPolicy: `no-cache`,
  });
  return data;
};

export const doLoginRequest = ({
  values,
  setLoginLoadingVisibility,
  setLoginErrorAlert,
  navigate,
}) => {
  makeLoginRequest(values)
    .then(({ Login }) => {
      const { value, token } = Login;
      if (value === `sucessfully_loged` && not(isEmpty(token))) {
        saveItem({ key: `token`, value: token });
        navigate(`Home`);
      } else {
        setLoginErrorAlert(`user_not_found`);
      }
      setLoginLoadingVisibility(false);
      // getItem({ key: `token` }).then(data => console.log(data));
    })
    .catch(() => {
      setLoginErrorAlert(`login_error`);
      setLoginLoadingVisibility(false);
    });
};
