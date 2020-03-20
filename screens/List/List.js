import React from 'react';
import {View} from 'react-native';

export const List = ({config, trending, latest, item}) => {
  switch (item) {
    case 'Trending':
      return <View/>;
    case 'Latest':
      return <View/>;
    default:
      return <View/>
  }
};