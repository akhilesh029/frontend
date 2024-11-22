
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import './index.css' 
import {BrowserRouter} from 'react-router-dom'
import StoreContextProvider, { StoreContext } from './Context/StoreContext.jsx';

ReactDOM.render(
<BrowserRouter>
<StoreContextProvider>
   <App />

</StoreContextProvider>

</BrowserRouter>
 
  ,
  document.getElementById('app')
);