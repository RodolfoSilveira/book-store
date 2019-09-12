import React, {useState, useEffect} from 'react';
import {
  Wrapper,
  Title,
  ImageArea,
  Name,
  Profission,
  Product,
  ProductText,
} from './styles';
import {Avatar} from 'react-native-elements';
import {StatusBar, FlatList} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

function Perfil() {
  const [user, setUser] = useState([])

  useEffect(() => {
    async function getUser() {
      const response = await AsyncStorage.getItem('@user')
      console.tron.log(JSON.parse(response))
      setUser(JSON.parse(response))
    }
    getUser()
  }, [])

  return (
    <>
      <Wrapper>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <Title>Perfil</Title>
        <ImageArea>
          <Avatar
            source={{
              uri: user.avatar,
            }}
            rounded
            showEditButton
            size="xlarge"
            activeOpacity={0.7}
          />
          <Name>{user.username}</Name>
          <Profission>Designer | Desenvolvedor</Profission>
          <Product>148</Product>
          <ProductText>Produtos</ProductText>
        </ImageArea>
      </Wrapper>
    </>
  );
}

export default Perfil;
