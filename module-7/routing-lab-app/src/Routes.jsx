import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About'
import BitcoinRates from './BitcoinRates';
import Login from './Login';
import PostList from './PostList';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/BitcoinRates" component={BitcoinRates} />
      <Route path="/Login" component={Login} />
      <Route path="/PostList" component={PostList} />
    </Switch>
  );
}

export default Routes;
