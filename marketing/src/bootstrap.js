import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './pages/Landing';

// Mount function to start up the app
const mount = el => {
  ReactDOM.render(
    <Landing />,
    el
  )
}

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#_dev-marketing-root')
  if (el) {
    mount(el);
  }
}

// We are running through container and we should export the mount function
export {mount};