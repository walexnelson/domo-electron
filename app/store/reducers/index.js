import { combineReducers } from 'redux';
import { loginReducer, INITIAL_STATE as loginState } from './login/login.reducer';

export default combineReducers({
  login: loginReducer,
});

export const INITIAL_STATE = {
  ...loginState,
};
