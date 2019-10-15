import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ToDo from './ToDoList';

const Routes = () => (
  <BrowserRouter>
    <nav>
      <div>
        <Link to="/">ToDo</Link>,
        <Link to="/asyncronous-api">Nhaaaa</Link>
      </div>
    </nav>
    <Switch>
      <Route exact path="/" component={ToDo} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
