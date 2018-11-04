import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import BackgroundImage from '../../assets/imgs/item_background.png';

const screenWidth = Dimensions.get(`window`).width;
const screenHeight = Dimensions.get(`window`).height;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Image = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const Item = styled(LinearGradient)`
  flex: 1;
  background-color: white;
  border-radius: 7;
  opacity: 0.7;
`;

const styles = StyleSheet.create({
  container: {
    height: 0.2 * screenHeight,
    width: 0.8 * screenWidth,
  },
  item: {
    elevation: 4,
  },
  image: {
    borderRadius: 7,
  },
});

const ModuleComponent = ({ colors }) => (
  <Container style={styles.container}>
    <Image imageStyle={styles.image} source={BackgroundImage}>
      <Item style={styles.item} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} />
    </Image>
  </Container>
);

ModuleComponent.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModuleComponent;
