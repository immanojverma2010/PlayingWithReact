import React from 'react';
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
//import { BrowserRouter } from 'react-router-dom'

import InfiniteList from './InfiniteList';
import App from './App';
import About from './About';




  export default () =>

  <Router history={browserHistory}>

   <Route path = "/" component = {App} />
   <Route path = "/home" component = {App} />
   <Route path = "/about" component = {About} />
   <Route path = "/infinteList" component = {InfiniteList} />
   
 </Router>
