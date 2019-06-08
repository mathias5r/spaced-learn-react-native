import React from 'react';
import { StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';
import { IS_IOS } from '../../../constants';

const styles = StyleSheet.create({
  ios: {
    shadowColor: `#000`,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  android: {
    elevation: 5,
  },
});

const ShadowViewComponent = ({ children }) => (
  <View style={IS_IOS ? styles.ios : styles.android}>{children}</View>
);

ShadowViewComponent.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default ShadowViewComponent;
