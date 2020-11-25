import React, {lazy, Suspense, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import {Header, Progress} from './components';

const MarketingLazy = lazy(() => import('./pages/Marketing'));
const AuthLazy = lazy(() => import('./pages/Auth'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'root'
})

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
        <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </StylesProvider>
    </BrowserRouter>
  )
}