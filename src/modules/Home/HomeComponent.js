import React from 'react';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';

const Container = styled(LinearGradient)`
  flex: 1;
`;

const HomeComponent = () => <Container colors={[`#23074d`, `#cc5333`]} />;

export default HomeComponent;
