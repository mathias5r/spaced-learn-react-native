import React, { useState, useEffect } from 'react';
import { Animated, Image } from 'react-native';
import styled from 'styled-components';
import { useNavigation } from 'react-navigation-hooks';
import StudyIcon from '../../assets/icons/study_icon.png';
import { doModulesRequest } from './LoadingService';

const BasicView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingComponent = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const { navigate } = useNavigation();

  useEffect(() => {
    Animated.loop(Animated.timing(animation, { toValue: 1, duration: 2000 })).start();
    doModulesRequest({ user: `Mathias`, navigate });
  }, []);

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [`0deg`, `360deg`],
  });

  return (
    <BasicView>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Image source={StudyIcon} style={{ width: 120, height: 120 }} />
      </Animated.View>
    </BasicView>
  );
};

export default LoadingComponent;
