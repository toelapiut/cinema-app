import {camelizeKeys, arrayToObject, slicer} from "../../helpers/helpers";
import _ from 'lodash'

export const recentReducer = (state = {}, action) => {
  const {response} = action;
  switch (action.type) {
    case 'GET_RECENTLY_ADDED_REQUEST':
      return Object.assign({}, state, {
        loading: true
      });
    case 'GET_RECENTLY_ADDED_SUCCESS':
      const {recently} = response;
      return Object.assign({}, state, {
        results: {
          ...camelizeKeys(
            arrayToObject(slicer(_.shuffle(recently), 0, 8), 'id')
          )
        },
        loading: false
      });
    case 'GET_RECENTLY_ADDED_FAILURE':
      return state;
    default: {
      return state;
    }
  }
};