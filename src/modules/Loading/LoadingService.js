import gql from 'graphql-tag';
import apolloClient from '../../services/apollo/client';

const MODULES = gql`
  query($user: String!) {
    Modules(user: $user) {
      name
      values {
        question
        answer
      }
    }
  }
`;

const makeModulesRequest = async user =>
  apolloClient.query({
    query: MODULES,
    variables: {
      user: user.toLowerCase(),
    },
    fetchPolicy: `no-cache`,
  });

export const doModulesRequest = async ({ user, navigate }) =>
  makeModulesRequest(user)
    .then(({ data }) => {
      console.log(data);
      setTimeout(() => navigate(`Home`), 1700);
    })
    .catch(err => {
      console.log(err);
      setTimeout(() => navigate(`Login`), 1700);
    });
