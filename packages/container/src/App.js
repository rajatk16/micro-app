import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {StylesProvider, createGenerateClassName} from '@material-ui/core/styles';

import Header from './components/Header';
import Marketing from './pages/Marketing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'root'
})

export default () => (
  <BrowserRouter>
    <StylesProvider generateClassName={generateClassName}>
      <Header />
      <Marketing />
    </StylesProvider>
  </BrowserRouter>
)