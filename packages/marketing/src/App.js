import React from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Landing from './pages/Landing'
import Pricing from './pages/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
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