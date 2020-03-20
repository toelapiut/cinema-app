import {https} from "../../utils/utils";


export const getTrendingAction = () => {
  return {
    types: [
      'GET_TRENDING_MOVIE_REQUEST',
      'GET_TRENDING_MOVIE_SUCCESS',
      'GET_TRENDING_MOVIE_FAILURE',
    ],
    payload: {},
    callAPI: ()=> https.get('trending/all/day')
  };
};