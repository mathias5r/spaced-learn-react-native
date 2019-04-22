import { isProduction } from '../constants';

export default message => {
  if (!isProduction) {
    console.log(message);
  }
};
