import React from 'react';
import { Switch, Route } from 'react-router';

import AppContainer from './containers/App';
import HomeContainer from './containers/Home';
import DataContainer from './containers/Data';

export default () => (
  <AppContainer>
    <Switch>
      <Route path="/datasets" component={DataContainer} />
      <Route path="/" component={HomeContainer} />
    </Switch>
  </AppContainer>
);
