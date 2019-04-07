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

const FormInputComponent = ({ theme, placeholder, onChangeText, isSecureText }) => (
  <FloatingLabel
    style={[styles.formInput, { borderColor: theme.colors.form_underline }]}
    inputStyle={[styles.input, { color: theme.colors.form_text }]}
    labelStyle={{ color: theme.colors.form_text }}
    onChangeText={onChangeText}
    secureTextEntry={isSecureText}
  >
    {placeholder}
  </FloatingLabel>
);

FormInputComponent.defaultProps = {
  placeholder: '',
  onChangeText: () => {},
  isSecureText: false,
}

FormInputComponent.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  isSecureText: PropTypes.bool,
};

export default withTheme(FormInputComponent);
