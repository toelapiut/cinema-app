export const latestReducer = (state = {}, action) => {
  const {response} = action;
  switch (action.type) {
    case 'GET_LATEST_MOVIE_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'GET_LATEST_MOVIE_SUCCESS':
      const {data} = response;
      return Object.assign({}, state, {
        ...data,
        loading: false
      });
    case 'GET_LATEST_MOVIE_FAILURE':
      return state;
    default: {
      return state;
    }
  }
};