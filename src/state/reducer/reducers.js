import { combineReducers } from "redux";
import accountReducer from './accountReducer.js';
import userReducer from './userReducer.js';

const reducers = combineReducers({
  account: accountReducer,
  user: userReducer
})

export default reducers;