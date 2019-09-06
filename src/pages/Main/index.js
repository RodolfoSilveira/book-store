import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import Login from '../Login';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '../../NavigationService';

function Main() {
  useEffect(() => {
    const token = AsyncStorage.getItem('@token');
    if (token) {
      NavigationService.navigate('Store');
    }
  }, []);

  return (
    <>
      <StatusBar backgroundColor="transparent" translucent />
      <Login />
    </>
  )
}

export default Main;
