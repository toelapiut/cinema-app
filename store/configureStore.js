import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import {initialState, rootReducer} from '../reducers';
import {apiInterceptor} from '../middleware';
import {composeWithDevTools} from 'remote-redux-devtools';


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


  const composedEnhancers = composeWithDevTools(
    ...enhancers,
  );

  return createStore(rootReducer, initialState, composedEnhancers);
};
