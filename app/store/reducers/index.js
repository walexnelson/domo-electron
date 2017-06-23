import { combineReducers } from 'redux';
import { loginReducer, INITIAL_STATE as loginState } from './login/login.reducer';
import { dataReducer, INITIAL_STATE as dataState } from './data/data.reducer';

export default combineReducers({
  login: loginReducer,
  data: dataReducer,
});

export const INITIAL_STATE = {
  ...loginState,
  ...dataState,
};
