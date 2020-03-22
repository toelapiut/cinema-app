import {https} from "../../utils/utils";


export const getPlayingNowAction = () => {
  return {
    types: [
      'GET_PLAYING_NOW_REQUEST',
      'GET_PLAYING_NOW_SUCCESS',
      'GET_PLAYING_NOW_FAILURE',
    ],
    payload: {},
    callAPI: ()=> https.get('movie/now_playing')
  };
};