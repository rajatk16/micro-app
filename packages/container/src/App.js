import React, {lazy, Suspense, useState, useEffect} from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';
import {createBrowserHistory} from 'history';

import {Header, Progress} from './components';

const MarketingLazy = lazy(() => import('./pages/Marketing'));
const AuthLazy = lazy(() => import('./pages/Auth'));
const DashboardLazy = lazy(() => import('./pages/Dashboard'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'root'
})

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn])

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
        <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/auth" />}
              <DashboardLazy  />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </Router>
  )
}