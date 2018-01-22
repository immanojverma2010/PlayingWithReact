import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import InfiniteList from './InfiniteList'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={About}/>
      <Route  path='/infiniteList' component={InfiniteList}/>



    </Switch>
  </main>
)

export default Main
