import {camelizeKeys, arrayToObject} from "../../helpers/helpers";

export const trendingReducer = (state = {}, action) => {
  const {response} = action;
  switch (action.type) {
    case 'GET_TRENDING_MOVIE_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'GET_TRENDING_MOVIE_SUCCESS':
      const {data} = response;
      const {page, results, total_pages, total_results} = data;
      return Object.assign({}, state, {
        page,
        totalPages:total_pages,
        totalResults:total_results,
        results:{...camelizeKeys(arrayToObject(results, 'id'))},
        loading: false
      });
    case 'GET_TRENDING_MOVIE_FAILURE':
      return state;
    default: {
      return state;
    }
  }
};