import styled from 'styled-components/native';
import {widthPercentageToDP, heightPercentageToDP} from '../../config/global';

export const Wrapper = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Wallpaper = styled.ImageBackground.attrs(props => ({
  source: props.image,
}))`
  flex: 1;
`;
export const ContentContainer = styled.View`
  height: ${heightPercentageToDP('8%')}px;
  width: ${widthPercentageToDP('80%')}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 4px;
`;
export const InputWrapper = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
`;
export const Input = styled.TextInput.attrs(props => ({
  placeholder: props.placeholder,
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
}))`
  height: 100%;
  width: 90%;
  margin-left: 10px;
  color: #000;
`;
export const Button = styled.Button.attrs(props => ({
  title: props.title,
  color: props.color,
}))`
  border-radius: 3px;
  padding: 20px;
`;
export const TextArea = styled.View`
  margin-top: 10px;
  flex-direction: row;
`;
export const Question = styled.Text`
  color: #fff;
  font-size: 15px;
  margin-right: 15px;
  font-weight: bold;
`;

export const Awser = styled.Text`
  color: #e67e22;
  font-size: 15px;
  font-weight: bold;
  text-decoration: underline;
`;
