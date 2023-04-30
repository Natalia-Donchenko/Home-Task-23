import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import ErrorBoundary from "./ErrorBoundary"
import store from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ErrorBoundary>
      
        <App />

     </ErrorBoundary>   
      </Provider>
    
  </React.StrictMode>
);

reportWebVitals();