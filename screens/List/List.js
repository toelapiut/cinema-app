import React from 'react';
import {Text} from 'react-native';
import PosterList from "../../components/PosterList";
import Hero from "../../components/Hero";
import TagList from "../../components/TagList";

// const sections = ['Latest', 'Tags','Trending', 'Recently', 'On Air', 'Playing Now', 'Popular', 'Now Playing'];
export const List = ({config, trending, latest, item, genres, onAir, playingNow, popular, upcoming, topRated}) => {
  switch (item) {
    case 'Tags':
      return <TagList
        items={genres}
        list={Object.keys(genres)}
      />;
    case 'Trending':
      return <PosterList
        title='Trending now'
        config={config}
        items={trending.results}
        list={Object.keys(trending.results)}
      />;
    // case 'Recently':
    //   return <PosterList
    //     title='Recently added'
    //     config={config}
    //     list={trending || []}
    //   />;
    case 'On Air':
      return <PosterList
        title='On Air'
        config={config}
        items={onAir.results}
        list={Object.keys(onAir.results)}
      />;
    case 'Playing Now':
      return <PosterList
        title='Playing Now on Cinema'
        config={config}
        items={playingNow.results}
        list={Object.keys(playingNow.results)}
      />;
    case 'Popular':
      return <PosterList
        title='Most Requested Movies (popular)'
        config={config}
        items={popular.results}
        list={Object.keys(popular.results)}
      />;
    case 'Upcoming':
      return <PosterList
        title='Upcoming Movies'
        config={config}
        items={upcoming.results}
        list={Object.keys(upcoming.results)}
      />;
    case 'Top Rated':
      return <PosterList
        title='Top Rated Movies'
        config={config}
        items={topRated.results}
        list={Object.keys(topRated.results)}
      />;
    case 'Latest':
      return <Hero
        genres={genres}
        config={config}
        trending={trending}
        latest={latest}
      />;
    default:
      return <Text style={{color: "white"}}>default</Text>

  }
};