import React from 'react';
import {View, Text} from 'react-native';
import PosterList from "../../components/PosterList";
import Hero from "../../components/Hero";
import TagList from "../../components/TagList";

/**
 *
 * 'Recently', 'Trending', 'Top Rated', 'Upcoming', 'Popular', 'Now Playing'
 */
export const List = ({config, trending, latest, item, genres}) => {
  console.log({item, trending:trending.results, check:item==='Trending'});
  console.log({genres})
  switch (item) {
    case 'Tags':
      return <TagList
        items = {genres}
        list={Object.keys(genres)}
      />;
    case 'Trending':
      return <PosterList
        title='Trending now'
        config={config}
        items = {trending.results}
        list={Object.keys(trending.results)}
      />;
    // case 'Recently':
    //   return <PosterList
    //     title='Recently added'
    //     config={config}
    //     list={trending || []}
    //   />;
    // case 'Top Rated':
    //   return <PosterList
    //     title='Trending now'
    //     config={config}
    //     list={trending || []}
    //   />;
    // case 'Popular':
    //   return <PosterList
    //     title='Trending now'
    //     config={config}
    //     list={trending || []}
    //   />;
    // case 'Upcoming':
    //   return <PosterList
    //     title='Trending now'
    //     config={config}
    //     list={trending || []}
    //   />;
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