/* eslint no-param-reassign: ["error", { "props": false }] */
const Domo = require('domo-sdk');

const logins = [
  { type: 'basic', user: 'alex.nelson@domo.com', instance: 'anthem', sid: '', token: '' },
  { type: 'basic', user: 'alex.nelson@domo.com', instance: 'domo', sid: '', token: '' },
  { type: 'oauth', token: '', secret: '', instance: 'domo-sentinel.beta' }
];


const service = {
  getLogins: () => logins,

  getActiveSession: () => new Domo(process.env.DOMO_CLIENT_ID, process.env.DOMO_CLIENT_SECRET, 'api.domo.com'),

  storeLogin: (login) => {
    // todo
    logins.push(login);
  },

  getLoginHistory: (event) => {
    try {
      const history = service.getLogins().map(i => i.instance);
      event.sender.send('LOGINS:LIST:SUCCESS', history);
    } catch (e) {
      event.sender.send('LOGINS:LIST:FAILED', e);
    }
  },

  loginWithAPI: ({ instance, token, secret }) => {
    service.storeLogin({ type: 'oauth', instance, token, secret });
    service.setActiveSession(instance);
  },

  loginWithUsername: ({ instance, username, password }) => {
    // todo
    service.storeLogin({ type: 'basic', instance, username, sid: '' });
    service.setActiveSession(instance);
  },

  loginWithDevToken: ({ instance, token }) => {
    // todo
    service.storeLogin({ type: 'basic', instance, token });
    service.setActiveSession(instance);
  },

  listDatasets: (event, { sort, limit, offset }) => {
    service.getActiveSession().datasets
      .list(sort, limit, offset)
      .then(res => {
        console.log('ListDataset', res);
        event.sender.send('DATASETS:LIST:SUCCESS', res);
        return res;
      })
      .catch(err => event.sender.send('DATASETS:LIST:FAILED', err));
  }
};

module.exports = service;
