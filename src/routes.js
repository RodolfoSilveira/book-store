import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Main from '~/pages/Main';
import Register from '~/pages/Register';
import Store from '~/pages/Store';
import Perfil from '~/pages/Perfil';
import Settings from '~/pages/Settings';

const TabNavigator = createBottomTabNavigator({
  Store: Store,
  Perfil: Perfil,
  Settings: Settings,
});

const Routes = createAppContainer(
  createSwitchNavigator(
    {
      Main: {
        screen: Main,
      },
      Register: {
        screen: Register,
      },
      Store: {
        screen: TabNavigator,
      },
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
