import {https} from "../../utils/utils";
import axios from 'axios';

const genre = (type) => {
  return https.get(`genre/${type}/list`)
};

export const getGenreAction = () => {
  return {
    types: [
      'GET_GENRE_REQUEST',
      'GET_GENRE_SUCCESS',
      'GET_GENRE_FAILURE',
    ],
    payload: {},
    callAPI: () => axios.all([genre('movie'), genre('tv')]).then(
      axios.spread((movieGenre, tvGenre) => {
        return {
          movie: movieGenre.data.genres,
          tv: tvGenre.data.genres,
        }
      })
    )
  };
};