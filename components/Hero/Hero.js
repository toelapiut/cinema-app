import React from 'react';
import ProgressiveImage from "../ProgressiveImage";
import {HeroWrapper, ContentWrap, OverView} from './styled';
import {LinearGradient} from 'expo-linear-gradient';
import Layout from "../../constants/Layout";
import {View, Text} from "react-native";


export const Hero = ({config, trending, latest}) => {
  console.log({config, trending, latest});

  const handleWithPoster = () => {
    if (!!latest.poster_path) {
      return latest
    }
    return trending.results[Object.keys(trending.results)[0]]
  };

  const {images: {secureBaseUrl, posterSizes}} = config;
  /*
   *  secureBaseUrl posterSizes[0] posterSizes[5]
   */

  console.log({
    handleWithPoster: handleWithPoster(),
    config,
    image: secureBaseUrl + posterSizes[0] + handleWithPoster().posterPath
  });
  const { posterPath, title, overview, voteAverage, releaseDate} = handleWithPoster();
  return (
    <HeroWrapper>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)', '#000']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 300,
          zIndex:1000,
          bottom:0
        }}
      />
      <ContentWrap>
        <OverView>{title}</OverView>
        <OverView>{releaseDate} | {voteAverage} </OverView>
        <OverView>{overview}</OverView>
      </ContentWrap>
      <ProgressiveImage
        resizeMode={'contain'}
        style={{width:Layout.window.width, height:400}}
        thumbnailSource={{uri:secureBaseUrl + posterSizes[0] + posterPath}}
        imageSource={{uri:secureBaseUrl + posterSizes[5] + posterPath}}
      />
    </HeroWrapper>
  )
}