import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  ToDoList ,
  AsyncApi
} from './containers'

const Routes = () => (
  <BrowserRouter>
    <nav>
      <div>
        <Link to="/">ToDoList</Link>,
        <Link to="/asyncronous-api">AsyncronousApi</Link>
      </div>
    </nav>
    <Switch>
      <Route exact path="/" component={ToDoList} />
      <Route exact path="/asyncronous-api" component={AsyncApi} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
