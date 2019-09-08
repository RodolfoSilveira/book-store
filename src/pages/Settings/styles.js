import styled from 'styled-components';
import {widthPercentageToDP, heightPercentageToDP} from '../../config/global';

export const Wrapper = styled.View`
  flex: 1;
  padding-top: 40px;
  background-color: #ecf1f8;
`;
export const Title = styled.Text`
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
`;
export const Text = styled.Text`
  font-size: 15px;
  margin-left: 30px;
  text-transform: uppercase;
  margin-top: ${heightPercentageToDP('10%')}px;
`;
