import styled from 'styled-components/native';
import Layout from "../../constants/Layout";

export const HeroWrapper = styled.View`

`;

export const ContentWrap = styled.View`
  position:absolute;
  width:${Layout.window.width-40}px;
  z-index:1001;
  bottom:0;
  padding:0 22px 80px;
`;

export const OverView = styled.Text`
  color:white;
`;