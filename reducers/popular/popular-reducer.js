import {arrayToObject, camelizeKeys} from "../../helpers/helpers";

export const popularReducer = (state = {}, action) => {
  const {response} = action;
  switch (action.type) {
    case 'GET_POPULAR_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'GET_POPULAR_SUCCESS':
      const {data} = response;
      const {results} = data;
      return Object.assign({}, state, {
        ...camelizeKeys(data),
        results: {...camelizeKeys(arrayToObject(results, 'id'))},
        loading: false
      });
    case 'GET_POPULAR_FAILURE':
      return state;
    default: {
      return state;
    }
  }
};