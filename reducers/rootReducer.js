import {configurationReducer} from "./configurations/configuration-reducer";
import {notificationReducer} from "./notification/notification-reducer";
import {playingNowReducer} from "./playingNow/playing-now-reducer";
import {topRatedReducer} from "./topRated/top-rated-reducer";
import {upcomingReducer} from "./upcoming/upcoming-reducer";
import {trendingReducer} from "./trending/trending-reducer";
import {popularReducer} from "./popular/popular-reducer";
import {recentReducer} from "./recent/recent-reducer";
import {latestReducer} from "./latest/latest-reducer";
import {genreReducer} from "./genre/genre-reducer";
import {onAirReducer} from "./onAir/on-air-reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  onAir: onAirReducer,
  genre: genreReducer,
  recent: recentReducer,
  latest: latestReducer,
  popular: popularReducer,
  trending: trendingReducer,
  upcoming: upcomingReducer,
  topRated: topRatedReducer,
  playingNow: playingNowReducer,
  notification: notificationReducer,
  configurations: configurationReducer,
});

export default rootReducer;
