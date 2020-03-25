import styled from 'styled-components/native';
import {BlurView} from "expo-blur";

export const ModelWrapper = styled.View`
  
`;


export const ModelInnerWrapper = styled.View`
   height:480px;
   width:325px; 
   border-radius:15px; 
   background-color:#000;
`;

export const ModelBody = styled.View`
  flex:1;
  background-color:transparent;
  align-items:center;
  justify-content:center
`;

export const OverView = styled.Text`
  font-family: cinema;
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  color: #fff;
`;

export const ContentWrapper = styled.View`
  position:absolute;
  padding:0 20px 0;
  bottom:28px;
  z-index:1001;
`;

export const CloseWrapper = styled.View`
  padding:2px 0 0 2px;
  position:absolute;
  z-index:1040;
  right:10px;
  top:10px;
  border-radius:9999px;
  background-color:rgba(0,0,0,0.5);
  width:35px;
  height:35px;
  align-items:center;
  justify-content:center;
`;

export const Title = styled.Text`
  font-family: cinema-bold;
  font-weight: bold;
  font-size: 21px;
  text-align: left;
  color: #fff;
`;

export const GenreText = styled.Text`
  padding:5px 0;
  color:#11D85D;
  font-size:14px;
  font-family:cinema;
`;
