export default class IOService {
  getLogins() {
    return [
      { type: 'basic', user: 'alex.nelson@domo.com', instance: 'anthem.domo.com', sid: '', token: '' },
      { type: 'basic', user: 'alex.nelson@domo.com', instance: 'anthem.domo.com', sid: '', token: '' },
      { type: 'oauth', token: '', secret: '' }
    ];
  }
}
