import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
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
import api from '../../services/api';

function Anuncio() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function getBooks() {
      const response = await api.get('/books')
        .then(res => res.data)
        .catch(err => console.tron.log(err));

      setBooks(response);
    }
    getBooks();
  }, []);

  return (
    <>
      <Title>Anúncios</Title>
      <Wrapper>
        <FlatList
          data={books}
          renderItem={({item}) => {
            const image = item.photos.map(i => i.id === 1 ? Object.values(i): '')
            const path = image[0][1]
            console.tron.log(image[0][1])
            return (
            <AnuncioBox>
              <BoxImage>
                <Image source={{uri: path}}/>
              </BoxImage>
              <BoxText>
                <ProductName>{item.book_name}</ProductName>
                <ProductValue>R$: {item.price}</ProductValue>
                <ProductDescription>Salvador, Amaralina</ProductDescription>
              </BoxText>
            </AnuncioBox>
          )}}
          keyExtractor={item => `${item.id}`}
        />
      </Wrapper>
    </>
  );
}

export default Anuncio;
