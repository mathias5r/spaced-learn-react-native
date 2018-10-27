import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import React from 'react';
import HomeScreen from './modules/Home/HomeComponent';
import MenuScreen from './modules/Menu/MenuComponent';

const DrawerStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    drawerWidth: 320,
    initialRouteName: `Home`,
    contentComponent: MenuScreen,
    headerMode: `none`,
  },
);

export default createStackNavigator(
  {
    DrawerStack,
  },
  {
    initialRouteName: `DrawerStack`,
    headerMode: `none`,
  },
);
