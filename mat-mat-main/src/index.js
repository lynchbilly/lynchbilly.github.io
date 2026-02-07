import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Reducers from './reducers';

import App from './App';

ReactDOM.render(
  <Provider store={createStore(Reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
