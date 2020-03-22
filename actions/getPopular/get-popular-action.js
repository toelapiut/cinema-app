import {https} from "../../utils/utils";

export const getPopularAction = () => {
  return {
    types: [
      'GET_POPULAR_REQUEST',
      'GET_POPULAR_SUCCESS',
      'GET_POPULAR_FAILURE',
    ],
    payload: {},
    callAPI: ()=> https.get('movie/popular')
  };
};