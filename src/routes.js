import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Main from '~/pages/Main';
import Register from '~/pages/Register';
import Store from '~/pages/Store';

const TabNavigator = createBottomTabNavigator({
  Store: Store,
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
