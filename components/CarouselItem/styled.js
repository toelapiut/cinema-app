import styled from "styled-components/native";

export const CarouselItemWrapper = styled.View`

`;
export const ContentWrapper = styled.View`
  position:absolute;
  bottom:15px;
  z-index:101;
  padding:0 20px 0px;
`;

export const Title = styled.Text`
padding:3px 0;
  font-family: cinema-bold;
  font-weight: bold;
  font-size: 21px;
  text-align: left;
  color: #fff;
  text-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;


export const Overview = styled.Text`
  font-family: cinema-thin;
  font-size: 13px;
  line-height: 18px;
  text-align: left;
  color: #fff;

`;


export const Genres = styled.Text`
  font-family: cinema-medium;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  color: #ff0215;
`;

export const PlayerWrapper = styled.View`
  position:absolute;
  z-index:1000;
  right:15px;
  bottom:80px;
`