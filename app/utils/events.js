/* eslint no-param-reassign: ["error", { "props": false }] */

module.exports = {
  getLogins: (event, args) => {
    event.returnValue = [
      { type: 'basic', user: 'alex.nelson@domo.com', instance: 'anthem.domo.com', sid: '', token: '' },
      { type: 'basic', user: 'alex.nelson@domo.com', instance: 'anthem.domo.com', sid: '', token: '' },
      { type: 'oauth', token: '', secret: '' }
    ];
  }
};
