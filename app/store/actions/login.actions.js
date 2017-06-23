import { ipcRenderer } from 'electron';

export const actions = {
  LOGIN_REQUESTED: 'LOGINS:LIST',
  LOGIN_RETRIEVED: 'LOGINS:LIST:SUCCESS',
  LOGIN_FAILED: 'LOGINS:LIST:FAILED'
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

  ipcRenderer.send(actions.LOGIN_REQUESTED);
  ipcRenderer.on(actions.LOGIN_RETRIEVED, (event, args) => dispatch(loginsRetrieved(args)));
  ipcRenderer.on(actions.LOGIN_FAILED, (event, args) => dispatch(loginsFailed(args)));
};
