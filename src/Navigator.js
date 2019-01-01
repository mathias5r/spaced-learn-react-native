import { createDrawerNavigator, createStackNavigator } from 'react-navigation';
import HomeScreen from './modules/Home/HomeComponent';
import MenuScreen from './modules/Menu/MenuComponent';
import LoginScreen from './modules/Login/LoginContainer';

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
    LoginScreen,
    DrawerStack,
  },
  {
    initialRouteName: `LoginScreen`,
    headerMode: `none`,
  },
);
