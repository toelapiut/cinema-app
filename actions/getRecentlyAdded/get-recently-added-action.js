import {https} from "../../utils/utils";
import axios from "axios";

const playingNow = () => {
  return https.get('movie/now_playing')
};
const onTheAir = () => {
  return https.get('tv/on_the_air')
};

export const getRecentlyAddedAction = () => {
  return {
    types: [
      'GET_RECENTLY_ADDED_REQUEST',
      'GET_RECENTLY_ADDED_SUCCESS',
      'GET_RECENTLY_ADDED_FAILURE',
    ],
    payload: {},
    callAPI: () => axios.all([playingNow(), onTheAir()]).then(
      axios.spread((movies, shows) => {
        const {data: {results}} = movies;
        return {
          recently: [...results, ...shows.data.results]
        }
      })
    )
  };
};