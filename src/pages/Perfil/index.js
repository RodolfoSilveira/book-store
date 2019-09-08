import React from 'react';
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
import {StatusBar} from 'react-native';

function Perfil() {
  return (
    <>
      <Wrapper>
        <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
        <Title>Perfil</Title>
        <ImageArea>
          <Avatar
            source={{
              uri: 'https://api.adorable.io/avatars/285/abott@adorable.png',
            }}
            rounded
            showEditButton
            size="xlarge"
            activeOpacity={0.7}
          />
          <Name>Rodolfo Silveira</Name>
          <Profission>Designer | Desenvolvedor</Profission>
          <Product>148</Product>
          <ProductText>Produtos</ProductText>
        </ImageArea>
      </Wrapper>
    </>
  );
}

export default Perfil;
