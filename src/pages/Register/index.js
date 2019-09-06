import React, {useState} from 'react';
import {Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
  Wrapper,
  Input,
  Wallpaper,
  Button,
  TextArea,
  Question,
  Awser,
  ContentContainer,
  InputWrapper,
} from './styles';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../NavigationService';
import {connect} from 'react-redux';
import {Creators} from '../../store/ducks/register';

const stackbook = require('../../../assets/img/stackbook.jpg');

function Register(props) {
  const [preview, setPreview] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleSelectImage() {
    ImagePicker.showImagePicker(
      {
        title: 'Selecionar imagem',
        takePhotoButtonTitle: 'Tire uma foto',
        chooseFromLibraryButtonTitle: 'Escolha uma foto da galeria',
        cancelButtonTitle: 'Cancelar',
      },
      upload => {
        if (upload.error) {
        } else if (upload.didCancel) {
        } else {
          const previewImage = {
            uri: `data:image/jpeg;base64,${upload.data}`,
          };

          let prefix;
          let ext;

          if (upload.fileName) {
            [prefix, ext] = upload.fileName.split('.');
            ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext;
          } else {
            prefix = new Date().getTime();
            ext = 'jpg';
          }

          const image = {
            uri: upload.uri,
            type: upload.type,
            name: `${prefix}.${ext}`,
          };

          setPreview(previewImage);
          setAvatar(image);
        }
      },
    );
  }

  function onBackButtonPressAndroid() {
    let youWantToHandleTheBackButtonPress;

    if (youWantToHandleTheBackButtonPress) {
      NavigationService.navigate('Main');
      return true;
    }
    return false;
  }

  function handlerSubmit() {
    if (password === confirmPassword) {
      const form = new FormData();
      form.append('avatar', avatar);
      form.append('username', username);
      form.append('email', email);
      form.append('password', password);

      props.dispatch(Creators.register(form));
    }
  }

  const {navigation} = props;

  return (
    <AndroidBackHandler onBackPress={onBackButtonPressAndroid}>
      <Wallpaper image={stackbook}>
        <Wrapper>
          <TouchableOpacity
            style={styles.selectButton}
            onPress={handleSelectImage}>
            <Text style={styles.selectButtonText}>Selecionar imagem</Text>
          </TouchableOpacity>

          {preview && <Image style={styles.preview} source={preview} />}

          <ContentContainer>
            <InputWrapper>
              <Icon name={'account-circle'} size={22} color={'#d3d3d3'} />
              <Input
                onChangeText={e => setUsername(e)}
                placeholder="Username"
              />
            </InputWrapper>
          </ContentContainer>

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

          <ContentContainer>
            <InputWrapper>
              <Icon name={'lock'} size={22} color={'#d3d3d3'} />
              <Input
                onChangeText={e => setConfirmPassword(e)}
                placeholder="Confirmar senha"
              />
            </InputWrapper>
          </ContentContainer>

          <Button
            color="#273C75"
            title="Cadastre-se"
            onPress={() => handlerSubmit()}
          />

          <TextArea>
            <Question>Já tem cadastro ?</Question>
            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
              <Awser>Login</Awser>
            </TouchableOpacity>
          </TextArea>
        </Wrapper>
      </Wallpaper>
    </AndroidBackHandler>
  );
}

const styles = StyleSheet.create({
  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FFF',
    borderStyle: 'dashed',
    height: 42,

    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'rgba(0,0,0, .8)',
  },

  selectButtonText: {
    fontSize: 16,
    color: '#FFF',
  },

  preview: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 4,
    marginBottom: 20,
  },
});

const mapStateToProps = state => ({
  register: state.register.data,
});

export default connect(mapStateToProps, null)(Register);
