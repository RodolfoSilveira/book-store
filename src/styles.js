import styled from 'styled-components/native';
import {widthPercentageToDP, heightPercentageToDP} from './config/global';

export const ContentContainer = styled.View`
  height: ${heightPercentageToDP('6%')}px;
  width: ${widthPercentageToDP('70%')}px;
  margin-left: 20px;
  justify-content: center;
  align-items: center;
  background-color: #ecf1f8;
  border-radius: 4px;
`;
export const InputWrapper = styled.View`
  height: 100%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
`;
export const Input = styled.TextInput.attrs((props) => ({
  placeholder: props.placeholder,
  autoCorrect: false,
  underlineColorAndroid: 'transparent',
}))`
  height: 100%;
  width: 90%;
  margin-left: 10px;
  color: #000;
`;
