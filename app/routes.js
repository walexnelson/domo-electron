import React from 'react';
import { Switch, Route } from 'react-router';

import AppContainer from './containers/App';
import HomeContainer from './containers/Home';

export default () => (
  <AppContainer>
    <Switch>
      <Route path="/" component={HomeContainer} />
    </Switch>
  </AppContainer>
);
