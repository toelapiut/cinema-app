import styled from 'styled-components/native';
import {BlurView} from 'expo-blur';


export const BlurWrapper = styled(BlurView)`
  border-radius:5px;
`;

export const TagText = styled.Text`
  font-family: cinema-medium;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  text-align: left;
  color: #fff;
`;