import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Wrapper,
  Title,
  Input,
  Wallpaper,
  Button,
  ButtonArea,
  InputWrapper,
  ContentContainer,
  TextArea,
  Awser,
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../NavigationService';
import {connect} from 'react-redux';
import {Creators} from '../../store/ducks/auth';

const book = require('../../../assets/img/book.jpg');

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    props.dispatch(Creators.authorize(email, password));
  }

  return (
    <>
      <Wallpaper image={book}>
        <Wrapper>
          <Title> BookStore </Title>
          <ContentContainer>
            <InputWrapper>
              <Icon name={'email'} size={22} color={'#d3d3d3'} />
              <Input onChangeText={e => setEmail(e)} placeholder="Email" />
            </InputWrapper>
          </ContentContainer>
          <ContentContainer>
            <InputWrapper>
              <Icon name={'lock'} size={22} color={'#d3d3d3'} />
              <Input onChangeText={e => setPassword(e)} placeholder="Senha" />
            </InputWrapper>
          </ContentContainer>
          <ButtonArea>
            <Button
              onPress={() => NavigationService.navigate('Register')}
              color="#273C75"
              title="Cadastro"
            />
            <Button
              onPress={() => handleSubmit()}
              color="#273C75"
              title="Login"
            />
          </ButtonArea>
          <TextArea>
            <TouchableOpacity>
              <Awser> Esqueceu sua senha ? </Awser>
            </TouchableOpacity>
          </TextArea>
        </Wrapper>
      </Wallpaper>
    </>
  );
}

const mapStateToProps = state => ({
  auth: state.auth.data,
});

export default connect(mapStateToProps, null)(Login);
