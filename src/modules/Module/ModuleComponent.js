import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import BackgroundImage from '../../assets/imgs/item_background.png';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../constants';
import ShadowViewComponent from '../UI/views/ShadowViewComponent';
import StudyIcon from '../../assets/icons/study_icon.png';

const Container = styled.View`
  width: ${SCREEN_WIDTH * 0.95};
  height: ${SCREEN_HEIGHT * 0.15};
  max-height: 100;
  max-width: 300;
  margin: 3px;
  position: relative;
`;

const ImageBackground = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 7;
  top: 0;
`;

const GradientView = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 7;
  opacity: 0.95;
  position: absolute;
  top: 0;
  z-index: 1;
`;

const ContentView = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0px 20px 0px 20px;
  position: absolute;
  top: 0;
  z-index: 2;
`;

const Icon = styled.Image`
  flex: 0.2;
  width: 50;
  height: 50;
`;

const DataView = styled.View`
  flex: 0.8;
  margin: 3px;
`;

const ModuleName = styled.Text`
  font-size: 16;
  color: white;
`;

const ModuleComponent = ({ colors }) => (
  <ShadowViewComponent>
    <Container>
      <ContentView>
        <Icon source={StudyIcon} style={{ width: 50, height: 50 }} />
        <DataView>
          <ModuleName>Teste</ModuleName>
        </DataView>
      </ContentView>
      <GradientView start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={colors} />
      <ImageBackground source={BackgroundImage} />
    </Container>
  </ShadowViewComponent>
);

ModuleComponent.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ModuleComponent;
