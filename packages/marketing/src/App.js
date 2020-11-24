import React from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {Switch, Route, Router} from 'react-router-dom';

import Landing from './pages/Landing'
import Pricing from './pages/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

export default ({history}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}