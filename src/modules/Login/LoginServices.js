import gql from 'graphql-tag';
import * as Yup from 'yup';
import { not, isEmpty } from 'ramda';
import apolloClient from '../../services/apollo/client';
import { saveItem } from '../../services/storage';

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

const makeLoginRequest = async ({ user, password }) =>
  apolloClient.mutate({
    mutation: LOGIN,
    variables: {
      user: user.toLowerCase(),
      password,
    },
    fetchPolicy: `no-cache`,
  });

export const doLoginRequest = ({
  values,
  setLoginLoadingVisibility,
  setLoginErrorAlert,
  navigate,
}) => {
  setLoginLoadingVisibility(true);
  makeLoginRequest(values)
    .then(({ data }) => {
      const { value, token } = data.Login;
      if (value === `sucessfully_loged` && not(isEmpty(token))) {
        saveItem({ key: `token`, value: token }).then(() => navigate(`Home`));
      } else {
        setLoginErrorAlert(`user_not_found`);
      }
      setLoginLoadingVisibility(false);
    })
    .catch(err => {
      console.log(err);
      setLoginErrorAlert(`login_error`);
      setLoginLoadingVisibility(false);
    });
};
