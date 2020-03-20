export const apiInterceptor = ({ dispatch, getState }) => next => action => {
  /**
   *  shouldCallAPI = () => true setting true always to cover when an action is
   *  dispatched without a shouldCallAPI function
   */

  const { types, callAPI, shouldCallAPI = () => true, payload = {} } = action;

  if (!types)  return next(action);

  /**
   * check whether the action types are:
   * 1. in an array format
   * 2. of length 3
   * 3. of type string
   */
  if (
    !Array.isArray(types) || types.length !== 3 ||
    !types.every(type => typeof type === 'string') ) {
    throw new Error('Expected an array of three string types.');
  }

  /**
   * check whether the action dispatched is of type action
   */
  if (typeof callAPI !== 'function') {
    throw new Error('Expected callAPI to be a function.');
  }

  /**
   * finally check whether the api should be called or not
   */
  if (!shouldCallAPI(getState())) return null;

  const [requestType, successType, failureType] = types;

  dispatch(
    Object.assign({}, payload, {
      type: requestType,
    })
  );



  return callAPI().then(response => {
    dispatch(
      Object.assign({}, payload, {
        response,
        payload,
        type: successType
      })
    );
  }).catch(err => {
    dispatch (
      Object.assign({}, payload, {
        type: failureType,
        payload,
        data:err
      })
    );
  });
};
