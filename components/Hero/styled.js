import styled from 'styled-components/native';
import Layout from "../../constants/Layout";

export const HeroWrapper = styled.View``;

export const ContentWrap = styled.View`
  position:absolute;
  width:${Layout.window.width-10}px;
  z-index:1001;
  bottom:20px;
  padding:0 22px 60px;
`;

export const OverView = styled.Text`
  color:white;
  font-size:15px;
  font-family:cinema;
  padding-top:5px;
  line-height:19px;
`;

export const Title = styled.Text`
  color:white;
  font-size:21px;
  font-family:cinema-bold;
`;

export const GenreText = styled.Text`
  padding-top:5px;
  color:#11D85D;
  font-size:13px;
  font-family:cinema-thin;
`