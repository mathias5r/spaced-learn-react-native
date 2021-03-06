import React from 'react';
import styled, { withTheme } from 'styled-components';
import { PropTypes } from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { ActivityIndicator } from 'react-native';

const LoginButton = styled.TouchableOpacity`
  width: 80%;
  height: 50;
  background-color: red;
  border-radius: 20;
`;

const ButtonGradient = styled(LinearGradient)`
  flex: 1;
  border-radius: 20;
  padding-left: 20;
  padding-right: 20;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.button_text};
  font-size: 16;
`;

const LoginButtonComponent = ({ text, onPress, showLoading }) => (
  <LoginButton onPress={onPress} style={{ elevation: 4 }}>
    <ButtonGradient
      colors={[`#8a2387`, `#e94057`, `#f27121`]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      {showLoading ? <ActivityIndicator color="#fff" /> : <Text>{text}</Text>}
    </ButtonGradient>
  </LoginButton>
);

LoginButtonComponent.defaultProps = {
  showLoading: false,
};

LoginButtonComponent.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  showLoading: PropTypes.bool,
};

export default withTheme(LoginButtonComponent);
