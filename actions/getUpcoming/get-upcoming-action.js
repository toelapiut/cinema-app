import {https} from "../../utils/utils";

export const getUpcomingAction = () => {
  return {
    types: [
      'GET_UPCOMING_REQUEST',
      'GET_UPCOMING_SUCCESS',
      'GET_UPCOMING_FAILURE',
    ],
    payload: {},
    callAPI: ()=> https.get('movie/upcoming')
  };
};