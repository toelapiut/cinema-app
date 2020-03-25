import React, {useMemo} from 'react';
import ProgressiveImage from "../ProgressiveImage";
import {ContentWrap, GenreText, HeroWrapper, OverView, Player, Title} from './styled';
import {LinearGradient} from 'expo-linear-gradient';
import Layout from "../../constants/Layout";
import PlayIcon from "../PlayIcon";

export const Hero = ({config, trending, latest, genres}) => {
  const {images: {secureBaseUrl, posterSizes}} = config;

  const handleWithPoster = () => {
    if (!!latest.poster_path) {
      return latest
    }
    return trending.results[Object.keys(trending.results)[Math.round(Math.random() * 20)]]
  };

  const {posterPath, title, overview, voteAverage, genreIds} = handleWithPoster();

  const memoProgressiveImage = useMemo(() => {
    return (
      <ProgressiveImage
        resizeMode={'cover'}
        style={{width: Layout.window.width, height: 430, alignSelf: "flex-start"}}
        thumbnailSource={{uri: secureBaseUrl + posterSizes[0] + posterPath}}
        imageSource={{uri: secureBaseUrl + posterSizes[6] + posterPath}}
      />
    )

  }, [handleWithPoster]);

  return (
    <HeroWrapper>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.9)', 'rgba(0,0,0,1)', '#000']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: 350,
          zIndex: 1000,
          bottom: 0
        }}
      />
      <Player>
        <PlayIcon/>
      </Player>
      <ContentWrap>
        <Title>{title}</Title>
        <GenreText>{genreIds.map((genre) => genres[genre]['name']).join('  |  ')} </GenreText>
        <OverView numberOfLines={4} ellipsizeMode={'tail'}>{overview}</OverView>
      </ContentWrap>
      {memoProgressiveImage}
    </HeroWrapper>
  )
};