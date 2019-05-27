import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './modules/Home/HomeComponent';
import MenuScreen from './modules/Menu/MenuComponent';
import LoginScreen from './modules/Login/LoginComponent';
import LoadingScreen from './modules/Loading/LoadingComponent';

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
    Loading: {
      screen: LoadingScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    DrawerStack,
  },
  {
    initialRouteName: `Loading`,
    headerMode: `none`,
  },
);

const App = createAppContainer(RootStack);
export default App;
