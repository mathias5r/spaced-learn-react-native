import { withFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = () =>
  Yup.object().shape({
    user: Yup.string().required(`empty_user`),
    password: Yup.string()
      .required(`empty_password`)
      .min(4, `min_password`),
  });

export default ({ handleSubmit, displayName }) =>
  withFormik({
    mapPropsToValues: () => ({}),
    validationSchema,
    handleSubmit,
    displayName,
  });
