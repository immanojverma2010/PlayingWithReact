import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import App from './components/App';


//import Routes from './components/Routes';

//
// ReactDOM.render(
//   <Routes />
//   ,
//   document.body.appendChild(document.createElement('div')));
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    ,
    document.body.appendChild(document.createElement('div')));
