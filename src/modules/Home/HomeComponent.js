import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components';
import ModuleComponent from '../Module/ModuleComponent';
import { GRADIENTS } from '../../constants';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ItemsView = styled.View``;

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
  {
    id: 3,
    text: `biologia`,
  },
];

const HomeComponent = () => (
  <Container>
    <ItemsView>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <ModuleComponent colors={GRADIENTS[index].colors} />}
      />
    </ItemsView>
  </Container>
);
export default HomeComponent;
