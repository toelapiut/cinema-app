import { combineReducers } from 'redux';
import {notificationReducer} from "./notification/notification-reducer";

const rootReducer = combineReducers({
  notification:notificationReducer
});

export default rootReducer;
