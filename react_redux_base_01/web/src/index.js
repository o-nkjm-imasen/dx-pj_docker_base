import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'assets/css/index.css';
import App from './App';
import { createBrowserHistory } from 'history'
import createStore from 'common/createStore';

const history = createBrowserHistory();
const store = createStore(history); 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

