import { combineReducers } from 'redux';
import {notificationReducer} from "./notification/notification-reducer";
import {latestReducer} from "./latest/latest-reducer";
import {trendingReducer} from "./trending/trending-reducer";
import {configurationReducer} from "./configurations/configuration-reducer";
import {genreReducer} from "./genre/genre-reducer";

const rootReducer = combineReducers({
  notification:notificationReducer,
  latest:latestReducer,
  configurations:configurationReducer,
  trending:trendingReducer,
  genre:genreReducer,
});

export default rootReducer;
