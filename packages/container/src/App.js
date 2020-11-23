import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Header from './components/Header';
import Marketing from './pages/Marketing';

export default () => (
  <BrowserRouter>
    <Header />
    <Marketing />
  </BrowserRouter>
)