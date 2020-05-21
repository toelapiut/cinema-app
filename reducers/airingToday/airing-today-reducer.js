import {arrayToObject, camelizeKeys} from "../../helpers/helpers";

export const airingTodayReducer = (state = {}, action) => {
  const {response} = action;
  switch (action.type) {
    case 'GET_AIRING_TODAY_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'GET_AIRING_TODAY_SUCCESS':
      const {data} = response;
      const {results} = data;
      return Object.assign({}, state, {
        ...camelizeKeys(data),
        results: {...camelizeKeys(arrayToObject(results, 'id'))},
        loading: false
      });
    case 'GET_AIRING_TODAY_FAILURE':
      return state;
    default: {
      return state;
    }
  }
};