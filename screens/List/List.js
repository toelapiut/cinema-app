import React from 'react';
import {View, Text} from 'react-native';
import PosterList from "../../components/PosterList";
import Hero from "../../components/Hero";

/**
 *
 * 'Recently', 'Trending', 'Top Rated', 'Upcoming', 'Popular', 'Now Playing'
 */
export const List = ({config, trending, latest, item}) => {
  switch (item) {
    case 'Trending':
      return <PosterList
        title='Trending now'
        config={config}
        list={trending || []}
      />;
    // case 'Now Playing':
    //   return <PosterList
    //     title='Trending now'
    //     config={config}
    //     list={trending || []}
    //   />;
    // case 'Recently':
    //   return <PosterList
    //     title='Trending now'
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
        config={config}
        trending={trending}
        latest={latest}
      />;
    default:
      return <Text style={{color: "white"}}>default</Text>

  }
};