import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { applyMiddleware, compose} from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import reducers from './reducers'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer: reducers}, compose(applyMiddleware(thunk)))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
 
);


