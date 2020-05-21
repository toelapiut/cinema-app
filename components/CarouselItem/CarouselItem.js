import React from 'react';
import {View, Text} from 'react-native';
import ProgressiveImage from "../ProgressiveImage";
import {LinearGradient} from "expo-linear-gradient";
import {ContentWrapper, Title, Overview, Genres, CarouselItemWrapper, PlayerWrapper} from "./styled";
import PlayIcon from "../PlayIcon";

export const CarouselItem = ({thumb, configurations, name, genreIds, genres, overview, width}) => {
  const {images: {secureBaseUrl, posterSizes}} = configurations;

  return (
    <CarouselItemWrapper>

      <Text/>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.55)', 'rgba(0,0,0,0.85)', 'rgba(0,0,0,0.95)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 200,
          zIndex: 100,
          bottom: 0
        }}
      />
        <ProgressiveImage
          style={{
            resizeMode:'cover',
            paddingTop:10,
            width: width, height: 220, borderRadius: 2
          }}
          thumbnailSource={{uri: secureBaseUrl + posterSizes[0] + thumb}}
          imageSource={{uri: secureBaseUrl + posterSizes[5] + thumb}}
        />
      {/*<PlayerWrapper>*/}
      {/*  <PlayIcon*/}
      {/*    wHeight={50}*/}
      {/*  />*/}
      {/*</PlayerWrapper>*/}
      <ContentWrapper>
        <Genres>{genreIds.map((genre) => genres[genre]['name']).join('  •  ')} </Genres>
        <Title>{name}</Title>
        <Overview numberOfLines={3}>{overview}</Overview>
      </ContentWrapper>
    </CarouselItemWrapper>
  )
};

