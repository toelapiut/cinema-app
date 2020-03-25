import React, {useMemo} from 'react';
import {Text} from 'react-native';
import PosterList from "../../components/PosterList";
import Hero from "../../components/Hero";
import TagList from "../../components/TagList";
import Carousel from "../../components/Carousel";

export const List = ({
                       config, trending, latest, item, genres, onAir, playingNow, popular, upcoming, topRated, recent,
                       onPressHandler
                     }) => {

  const memoHero = useMemo(() => {
    return <Hero
      genres={genres}
      config={config}
      trending={trending}
      latest={latest}
    />;
  }, []);

  switch (item) {
    case 'Tags':
      return <TagList
        items={genres}
        list={Object.keys(genres)}
      />;
    case 'Trending':
      return <PosterList
        genres={genres}
        onPressHandler={onPressHandler}
        title='Trending now'
        config={config}
        items={trending.results}
        list={Object.keys(trending.results)}
      />;
    case 'Recently':
      return <Carousel
        title='Recently added'
        genres={genres}
        config={config}
        items={recent.results}
        list={Object.keys(recent.results)}
      />;
    case 'On Air':
      return <PosterList
        genres={genres}
        onPressHandler={onPressHandler}
        title='On Air'
        config={config}
        items={onAir.results}
        list={Object.keys(onAir.results)}
      />;
    case 'Playing Now':
      return <PosterList
        genres={genres}
        onPressHandler={onPressHandler}
        title='Playing Now on Cinema'
        config={config}
        items={playingNow.results}
        list={Object.keys(playingNow.results)}
      />;
    case 'Popular':
      return <PosterList
        genres={genres}
        onPressHandler={onPressHandler}
        title='Most Requested Movies (popular)'
        config={config}
        items={popular.results}
        list={Object.keys(popular.results)}
      />;
    case 'Upcoming':
      return <PosterList
        genres={genres}
        onPressHandler={onPressHandler}
        title='Upcoming Movies'
        config={config}
        items={upcoming.results}
        list={Object.keys(upcoming.results)}
      />;
    case 'Top Rated':
      return <PosterList
        genres={genres}
        onPressHandler={onPressHandler}
        title='Top Rated Movies'
        config={config}
        items={topRated.results}
        list={Object.keys(topRated.results)}
      />;
    case 'Latest':
      return memoHero;
    default:
      return <Text style={{color: "white"}}>default</Text>
  }
};