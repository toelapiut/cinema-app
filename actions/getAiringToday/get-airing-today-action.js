import {https} from "../../utils/utils";


export const getAiringTodayAction = () => {
  return {
    types: [
      'GET_AIRING_TODAY_REQUEST',
      'GET_AIRING_TODAY_SUCCESS',
      'GET_AIRING_TODAY_FAILURE',
    ],
    payload: {},
    callAPI: ()=> https.get('tv/airing_today')
  };
};