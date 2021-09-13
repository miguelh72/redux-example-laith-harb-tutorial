function accountReducer(state = 0, action) {
  switch (action.type) {
    case 'account/deposit':
      return state + action.payload;
    case 'account/withdraw':
      return state - action.payload;
    default:
      return state;
  }
}

export default accountReducer;