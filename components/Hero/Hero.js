import React from 'react';
import ProgressiveImage from "../ProgressiveImage";
import {HeroWrapper, ContentWrap, OverView, Title, GenreText} from './styled';
import {LinearGradient} from 'expo-linear-gradient';
import Layout from "../../constants/Layout";
import {View, Text} from "react-native";


export const Hero = ({config, trending, latest, genres}) => {
  console.log({config, trending, latest});

  const handleWithPoster = () => {
    if (!!latest.poster_path) {
      return latest
    }
    return trending.results[Object.keys(trending.results)[0]]
  };
  const {images: {secureBaseUrl, posterSizes}} = config;
  const {posterPath, title, overview, voteAverage, genreIds} = handleWithPoster();
  return (
    <HeroWrapper>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)', '#000']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 300,
          zIndex: 1000,
          bottom: 0
        }}
      />
      <ContentWrap>
        <Title>{title}</Title>
        <GenreText>{genreIds.map((genre)=> genres[genre]['name']).join('  |  ')} </GenreText>
        <OverView numberOfLines={3} ellipsizeMode={'tail'}>{overview}</OverView>
      </ContentWrap>
      <ProgressiveImage
        resizeMode={'contain'}
        style={{width: Layout.window.width, height: 380}}
        thumbnailSource={{uri: secureBaseUrl + posterSizes[0] + posterPath}}
        imageSource={{uri: secureBaseUrl + posterSizes[5] + posterPath}}
      />
    </HeroWrapper>
  )
}