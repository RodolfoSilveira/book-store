import styled from 'styled-components';
import {heightPercentageToDP, widthPercentageToDP} from '../../config/global';

export const Wrapper = styled.ScrollView`
  flex: 1;
  width: ${widthPercentageToDP('98%')}px;
`;
export const Title = styled.Text`
  font-size: 20px;
  margin: 20px;
  font-weight: 300;
`;
export const AnuncioBox = styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-bottom: 30px;
  margin-left: 10px;
  border-radius: 8px;
  height: ${heightPercentageToDP('20px')}px;
`;
export const BoxImage = styled.View`
  flex: 1;
`;
export const Image = styled.Image.attrs(props => ({
  source: props.source,
}))`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 120px;
  width: 150px;
  margin-left: 10px;
`;
export const BoxText = styled.View`
  flex: 1;
`;
export const ProductName = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const ProductValue = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
`;
export const ProductDescription = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;
