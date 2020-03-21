import {camelizeKeys} from "../../helpers/helpers";

export const configurationReducer = (state = {}, action) => {
  const {response} = action;
  switch (action.type) {
    case 'GET_CONFIGURATION_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'GET_CONFIGURATION_SUCCESS':
      const {data} = response;
      return Object.assign({}, state, {
        ...camelizeKeys(data),
        loading: false
      });
    case 'GET_CONFIGURATION_FAILURE':
      return state;
    default: {
      return state;
    }
  }
};