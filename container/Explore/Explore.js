import React, {useEffect} from 'react';
import ExploreScreen from '../../screens/Explore'


export const Explore = ({trending, latest, configurations, getLatestAction, getTrendingAction, getConfigurationAction, getGenreAction, genres}) => {
  console.log({trending, latest});
  useEffect(() => {
    (async function requests() {
      await getConfigurationAction();
      await getGenreAction();
      await getLatestAction();
      await getTrendingAction();
    })()
  }, []);

  const handleRefreshing = () => {
    return null;
  };

  return <ExploreScreen
    genres={genres}
    trending={trending}
    latest={latest}
    config={configurations}
    onRefresh={handleRefreshing}
  />
};