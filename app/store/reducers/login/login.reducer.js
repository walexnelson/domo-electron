import {
  LOGIN_REQUESTED,
  LOGIN_RETRIEVED,
  LOGIN_FAILED
} from '../../actions/login.actions';

function handleLoginsFailed(state, action) {
  return {
    ...state,
    isLoading: false,
    error: action.error,
  };
}

function handleLoginsRequested(state) {
  return {
    ...state,
    isLoading: true,
  };
}

function handleLoginsRetrieved(state, action) {
  return {
    ...state,
    isLoading: false,
    logins: action.logins,
  };
}

const actionHandlers = new Map([
  [LOGIN_REQUESTED, handleLoginsRequested],
  [LOGIN_RETRIEVED, handleLoginsRetrieved],
  [LOGIN_FAILED, handleLoginsFailed],
]);

export const INITIAL_STATE = {
  logins: [],
  isLoading: false,
};

export function loginReducer(state = INITIAL_STATE, action) {
  return (actionHandlers.has(action.type) ? actionHandlers.get(action.type)(state, action) : state);
}
