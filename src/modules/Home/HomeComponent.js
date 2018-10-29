import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';

const screenWidth = Dimensions.get(`window`).width;

const Container = styled(LinearGradient)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Item = styled.Text`
  flex: 1;
  background-color: white;
  border-radius: 20;
`;

const CarouselView = styled.View`
  height: 300;
`;

const data = [
  {
    id: 1,
    text: `inglês`,
  },
  {
    id: 2,
    text: `matemática`,
  },
  {
    id: 3,
    text: `português`,
  },
];

const HomeComponent = () => (
  <Container colors={[`#23074d`, `#cc5333`]}>
    <CarouselView>
      <Carousel
        data={data}
        renderItem={({ item }) => <Item>{item.text}</Item>}
        sliderWidth={screenWidth}
        itemWidth={250}
      />
    </CarouselView>
  </Container>
);

export default HomeComponent;
