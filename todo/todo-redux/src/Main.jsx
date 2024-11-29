import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

<StrictMode>

<Provider store={store}>
  
    <App />
  </Provider>
  </StrictMode>

  

