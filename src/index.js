import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
//import configureStore from './store/configureStore';
import App from './App';

const store = configureStore();

render(
  <AppContainer
    component={App}
    props={{ store }}
  />,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(
      <AppContainer
        component={require('./App').default}
        props={{ store }}
      />,
      document.getElementById('app')
    );
  });
}
