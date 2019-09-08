import styled from 'styled-components';
import {widthPercentageToDP, heightPercentageToDP} from '../../config/global';

export const Wrapper = styled.View`
  flex: 1;
  padding-top: 40px;
  background-color: #ecf1f8;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;
export const Name = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  margin-top: ${heightPercentageToDP('5%')}px;
`;
export const ImageArea = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${heightPercentageToDP('8%')}px;
`;
export const Profission = styled.Text`
  font-size: 18px;
`;
export const Product = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin-top: ${heightPercentageToDP('10%')}px;
`;
export const ProductText = styled.Text`
  font-size: 18px;
`;
