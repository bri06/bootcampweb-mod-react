import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NoMatch from './NoMatch';
import Movies from '../Movies';
import DetailView from '../Detail';
import Collections from '../Collections';
import CollectionDetail from '../Collections/CollectionDetail';

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Movies}/>
      <Route path="/movie/:id" exact component={DetailView}/>
      <Route path="/mycollections" exact component={Collections}/>
      <Route path="/mycollections/:collectionId" exact component={CollectionDetail}/>
      <Route component={NoMatch} />
    </Switch>
  </Router>
);

export default AppRoutes;