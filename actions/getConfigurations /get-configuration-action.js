import {https} from "../../utils/utils";


export const getConfigurationAction = () => {
  return {
    types: [
      'GET_CONFIGURATION_REQUEST',
      'GET_CONFIGURATION_SUCCESS',
      'GET_CONFIGURATION_FAILURE',
    ],
    payload: {},
    callAPI: ()=> https.get('configuration')
  };
};