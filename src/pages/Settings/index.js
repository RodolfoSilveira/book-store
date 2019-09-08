import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {TouchableOpacity, StatusBar} from 'react-native';
import {Wrapper, Title, Text} from './styles';

function Settings(props) {
  async function onLogin() {
    await AsyncStorage.clear();
    const {navigation} = props;
    navigation.navigate('Main');
  }

  return (
    <>
      <Wrapper>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        <Title>Configurações</Title>
        <TouchableOpacity onPress={() => onLogin()}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </Wrapper>
    </>
  );
}

export default Settings;
