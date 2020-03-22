import { combineReducers } from 'redux';
import {notificationReducer} from "./notification/notification-reducer";
import {latestReducer} from "./latest/latest-reducer";
import {trendingReducer} from "./trending/trending-reducer";
import {configurationReducer} from "./configurations/configuration-reducer";
import {genreReducer} from "./genre/genre-reducer";
import {recentReducer} from "./recent/recent-reducer";
import {onAirReducer} from "./onAir/on-air-reducer";
import {playingNowReducer} from "./playingNow/playing-now-reducer";

const rootReducer = combineReducers({
  onAir:onAirReducer,
  genre:genreReducer,
  recent:recentReducer,
  latest:latestReducer,
  trending:trendingReducer,
  playingNow:playingNowReducer,
  notification:notificationReducer,
  configurations:configurationReducer,
});

export default rootReducer;
