import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Landing from './pages/Landing';
import Pricing from './pages/Pricing';

export default () => {
  return (
    <div>
      <StylesProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}