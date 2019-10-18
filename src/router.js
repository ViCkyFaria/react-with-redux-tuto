import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ToDoList } from './containers'

const Routes = () => (
  <BrowserRouter>
    <nav>
      <div>
        <Link to="/">ToDoList</Link>
      </div>
    </nav>
    <Switch>
      <Route exact path="/" component={ToDoList} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
