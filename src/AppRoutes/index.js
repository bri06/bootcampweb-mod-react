import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NoMatch from './NoMatch';
import Login from '../Login';
import Movies from '../Movies';
import DetailView from '../Detail';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={Movies}/>
      <Route path="/movie/:id" exact component={DetailView}/>
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default AppRoutes;