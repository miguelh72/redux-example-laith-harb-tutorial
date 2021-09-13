export function deposit(amount) {
  return dispatch => {
    dispatch({
      type: 'account/deposit',
      payload: amount
    });
  };
}

export function withdraw(amount) {
  // example of async action dispatching with redux-thunk middleware
  return dispatch => {
    setTimeout(() => {
      return dispatch({
        type: 'account/withdraw',
        payload: amount
      });
    }, 1000);
  };
}