import React from 'react';
import {
  Title,
  AnuncioBox,
  Wrapper,
  Image,
  BoxImage,
  BoxText,
  ProductName,
  ProductValue,
  ProductDescription,
} from './styles';

function Anuncio() {
  return (
    <>
      <Title>Anúncios</Title>
      <Wrapper>
        <AnuncioBox>
          <BoxImage>
            <Image source={require('../../../assets/img/book.jpg')} />
          </BoxImage>
          <BoxText>
            <ProductName>Book</ProductName>
            <ProductValue>R$: 30,50</ProductValue>
            <ProductDescription>Salvador, Amaralina</ProductDescription>
          </BoxText>
        </AnuncioBox>
        <AnuncioBox>
          <BoxImage>
            <Image source={require('../../../assets/img/book.jpg')} />
          </BoxImage>
          <BoxText>
            <ProductName>Book</ProductName>
            <ProductValue>R$: 30,50</ProductValue>
            <ProductDescription>Salvador, Amaralina</ProductDescription>
          </BoxText>
        </AnuncioBox>
        <AnuncioBox>
          <BoxImage>
            <Image source={require('../../../assets/img/book.jpg')} />
          </BoxImage>
          <BoxText>
            <ProductName>Book</ProductName>
            <ProductValue>R$: 30,50</ProductValue>
            <ProductDescription>Salvador, Amaralina</ProductDescription>
          </BoxText>
        </AnuncioBox>
        <AnuncioBox>
          <BoxImage>
            <Image source={require('../../../assets/img/book.jpg')} />
          </BoxImage>
          <BoxText>
            <ProductName>Book</ProductName>
            <ProductValue>R$: 30,50</ProductValue>
            <ProductDescription>Salvador, Amaralina</ProductDescription>
          </BoxText>
        </AnuncioBox>
        <AnuncioBox>
          <BoxImage>
            <Image source={require('../../../assets/img/book.jpg')} />
          </BoxImage>
          <BoxText>
            <ProductName>Book</ProductName>
            <ProductValue>R$: 30,50</ProductValue>
            <ProductDescription>Salvador, Amaralina</ProductDescription>
          </BoxText>
        </AnuncioBox>
        <AnuncioBox>
          <BoxImage>
            <Image source={require('../../../assets/img/book.jpg')} />
          </BoxImage>
          <BoxText>
            <ProductName>Book</ProductName>
            <ProductValue>R$: 30,50</ProductValue>
            <ProductDescription>Salvador, Amaralina</ProductDescription>
          </BoxText>
        </AnuncioBox>
      </Wrapper>
    </>
  )
}

export default Anuncio;
