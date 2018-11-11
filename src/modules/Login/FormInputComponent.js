import React from 'react';
import FloatingLabel from 'react-native-floating-labels';
import { StyleSheet } from 'react-native';
import { withTheme } from 'styled-components';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    fontSize: 14,
  },
  formInput: {
    borderBottomWidth: 1,
  },
});

const FormInputComponent = ({ theme, placeholder }) => (
  <FloatingLabel
    style={[styles.formInput, { borderColor: theme.colors.form_underline }]}
    inputStyle={[styles.input, { color: theme.colors.form_text }]}
    labelStyle={{ color: theme.colors.form_text }}
  >
    {placeholder}
  </FloatingLabel>
);

FormInputComponent.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default withTheme(FormInputComponent);
