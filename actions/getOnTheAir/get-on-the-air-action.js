import {https} from "../../utils/utils";

export const getOnTheAirAction = () => {
  return {
    types: [
      'GET_ON_THE_AIR_REQUEST',
      'GET_ON_THE_AIR_SUCCESS',
      'GET_ON_THE_AIR_FAILURE',
    ],
    payload: {},
    callAPI: () => https.get('tv/on_the_air')
  };
};