import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './App';
import './index.css';
import rootReducer from './reducers'
import registerServiceWorker from './registerServiceWorker';

// const initialState = { 
//   newtod
//   todos: [],
// };

const middleware: any[] = [];

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(...middleware)
))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();


