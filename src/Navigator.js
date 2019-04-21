import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
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

const RootStack = createStackNavigator(
  {
    LoginScreen,
    DrawerStack,
  },
  {
    initialRouteName: `LoginScreen`,
    headerMode: `none`,
  },
);

const App = createAppContainer(RootStack);
export default App;
