import React, {useEffect, useState} from 'react';
import ExploreScreen from '../../screens/Explore'


export const Explore = ({
                          trending, latest, configurations, getLatestAction, getTrendingAction, getConfigurationAction,
                          getGenreAction, genres, recent, getOnTheAirAction, getPlayingNowAction, getRecentlyAddedAction,
                          onAir, playingNow, getPopularAction, getUpcomingAction, getTopRatedAction, popular, upcoming,
                          topRated
                        }) => {

  useEffect(() => {
    (async function requests() {
      await getConfigurationAction();
      await getGenreAction();
      await getLatestAction();
      await getRecentlyAddedAction();
      await getOnTheAirAction();
      await getPlayingNowAction();
      await getPopularAction();
      await getUpcomingAction();
      await getTopRatedAction();
      await getTrendingAction();
    })()
  }, []);

  const handleRefreshing = () => {
    return null;
  };


  return <ExploreScreen
    onAir={onAir}
    playingNow={playingNow}
    genres={genres}
    popular={popular}
    upcoming={upcoming}
    topRated={topRated}
    recent={recent}
    trending={trending}
    latest={latest}
    config={configurations}
    onRefresh={handleRefreshing}
  />
};