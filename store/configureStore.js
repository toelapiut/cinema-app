import {applyMiddleware, compose, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {rootReducer, initialState} from '../reducers';
import {apiInterceptor} from '../middleware';


export const configureStore = () => {

  const middleware = [
    thunkMiddleware,
    apiInterceptor,
  ];

  // eslint-disable-next-line no-undef
  if (__DEV__) {
    middleware.push(logger);
  }

  const middlewareEnhancer = applyMiddleware(
    ...middleware
  );

  const enhancers = [
    middlewareEnhancer
  ];

  const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const  composedEnhancers = composer(
    ...enhancers
  );
  return createStore(rootReducer, initialState, composedEnhancers);
};
