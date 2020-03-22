import {https} from "../../utils/utils";

export const getTopRatedAction = () => {
  return {
    types: [
      'GET_TOP_RATED_REQUEST',
      'GET_TOP_RATED_SUCCESS',
      'GET_TOP_RATED_FAILURE',
    ],
    payload: {},
    callAPI: ()=> https.get('movie/top_rated')
  };
};