import { IOService } from '../services';

const io = new IOService();

export const actions = {
  LOGIN_REQUESTED: 'LOGIN_REQUESTED',
  LOGIN_RETRIEVED: 'LOGIN_RETRIEVED',
  LOGIN_FAILED: 'LOGIN_FAILED'
};

export function loginsRequested() {
  return { type: actions.LOGIN_REQUESTED };
}

export function loginsRetrieved(res) {
  return {
    type: actions.LOGIN_RETRIEVED,
    logins: res.data ? res.data : res
  };
}

export function loginsFailed(error) {
  return {
    type: actions.LOGIN_FAILED,
    error,
  };
}

export const getLogins = () => (dispatch) => {
  dispatch(loginsRequested());

  return io.getLogins()
    .then(res => dispatch(loginsRetrieved(res)))
    .catch(err => dispatch(loginsFailed(err)));
};
