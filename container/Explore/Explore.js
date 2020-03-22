import React, {useEffect} from 'react';
import ExploreScreen from '../../screens/Explore'


export const Explore = ({
                          trending, latest, configurations, getLatestAction, getTrendingAction, getConfigurationAction,
                          getGenreAction, genres, recent, getOnTheAirAction, getPlayingNowAction, getRecentlyAddedAction,
                        }) => {
  console.log({trending, latest});
  useEffect(() => {
    (async function requests() {
      await getConfigurationAction();
      await getGenreAction();
      await getLatestAction();
      await getTrendingAction();
      await getRecentlyAddedAction();
      await getOnTheAirAction();
      await getPlayingNowAction();
    })()
  }, []);

  const handleRefreshing = () => {
    return null;
  };

  return <ExploreScreen
    genres={genres}
    recent={recent}
    trending={trending}
    latest={latest}
    config={configurations}
    onRefresh={handleRefreshing}
  />
};