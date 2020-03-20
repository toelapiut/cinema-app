import {arrayToObject} from "../../helpers/helpers";

export const genreReducer = (state = {}, action) => {
  const {response} = action;
  switch (action.type) {
    case 'GET_GENRE_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'GET_GENRE_SUCCESS':
      const {movie, tv} = response;
      return Object.assign({}, state, {
        genres: {
          ...arrayToObject(movie, 'id'),
          ...arrayToObject(tv, 'id')
        },
        loading: false
      });
    case 'GET_GENRE_FAILURE':
      return state;
    default: {
      return state;
    }
  }
};