import { ipcRenderer } from 'electron';

export default class IOService {
  getLogins() {
    const logins = ipcRenderer.sendSync('get-logins', 'now');
    return Promise.resolve(logins);
  }
}
