import {https} from "../../utils/utils";


export const getLatestAction = () => {
  return {
    types: [
      'GET_LATEST_MOVIE_REQUEST',
      'GET_LATEST_MOVIE_SUCCESS',
      'GET_LATEST_MOVIE_FAILURE',
    ],
    payload: {},
    callAPI: ()=> https.get('movie/latest')
  };
};