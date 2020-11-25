import React from 'react';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {Switch, Route, Router} from 'react-router-dom';

import {SignIn, Signup} from './pages'

const generateClassName = createGenerateClassName({
  productionPrefix: 'au'
})

export default ({history, onSignIn}) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin">
              <SignIn onSignIn={onSignIn} />
            </Route>
            <Route exact path="/auth/signup">
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}