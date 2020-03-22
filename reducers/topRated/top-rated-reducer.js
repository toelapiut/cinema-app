import {arrayToObject, camelizeKeys} from "../../helpers/helpers";

export const topRatedReducer = (state = {}, action) => {
  const {response} = action;
  switch (action.type) {
    case 'GET_TOP_RATED_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'GET_TOP_RATED_SUCCESS':
      const {data} = response;
      const {results} = data;
      return Object.assign({}, state, {
        ...camelizeKeys(data),
        results: {...camelizeKeys(arrayToObject(results, 'id'))},
        loading: false
      });
    case 'GET_TOP_RATED_FAILURE':
      return state;
    default: {
      return state;
    }
  }
};