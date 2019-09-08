import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator, DrawerActions} from 'react-navigation-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {ContentContainer, InputWrapper, Input} from './styles';

import Main from '~/pages/Main';
import Register from '~/pages/Register';
import Store from '~/pages/Store';
import Perfil from '~/pages/Perfil';
import Settings from '~/pages/Settings';
import RegisterBook from '~/components/FormContainer/RegisterBookContainer';

const drawer = createDrawerNavigator({
  Store: {
    screen: Store,
    navigationOptions: {
      drawerLabel: 'Loja',
    },
  },
  RegisterBook: {
    screen: RegisterBook,
    navigationOptions: {
      drawerLabel: 'Venda seu livro',
    },
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Store: {
      screen: drawer,
      navigationOptions: {
        tabBarLabel: 'Loja',
        tabBarIcon: () => (
          <Icon name="shopping-basket" size={30} color="#273C75" />
        ),
      },
    },
    Perfil: {
      screen: Perfil,
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: () => (
          <Icon name="account-circle" size={30} color="#273C75" />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Configurações',
        tabBarIcon: () => (
          <Icon name="settings-applications" size={30} color="#273C75" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#e67e22',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: '#000',
        height: 70,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        paddingBottom: 10,
      },
    },
  },
);

const stackNavigator = createStackNavigator(
  {
    Store: {
      screen: TabNavigator,
      navigationOptions: ({navigation}) => ({
        headerLeft: (
          <>
            <TouchableOpacity
              style={{paddingLeft: 30}}
              onPress={() => {
                navigation.dispatch(DrawerActions.toggleDrawer());
              }}>
              <Icon
                name="menu"
                size={30}
                color="#273C75"
                navigation={navigation}
              />
            </TouchableOpacity>
            <ContentContainer>
              <InputWrapper>
                <Icon name="search" size={22} color="#273C75" />
                <Input />
              </InputWrapper>
            </ContentContainer>
          </>
        ),
      }),
    },
  },
  {
    mode: 'modal',
  },
);

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
        screen: stackNavigator,
      },
    },
    {
      initialRouteName: 'Main',
    },
  ),
);

export default Routes;
