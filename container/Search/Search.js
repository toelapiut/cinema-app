import React, {useEffect} from 'react';
import SearchScreen from '../../screens/Search';

export const Search = ({genres, airing, getAiringTodayAction}) => {

  useEffect(() => {
    getAiringTodayAction();
  }, []);


  return (
    <SearchScreen
      airing={airing}
      genres={genres}
    />
  )
};