import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  ToDoList ,
  AsyncApi,
  NotFound,
  Contact
} from './containers'

const Routes = () => (
  <BrowserRouter>
    <nav>
      <div>
        <Link to="/to-do">ToDoList</Link>,
        <Link to="/asyncronous-api">AsyncronousApi</Link>,
        <Link to="/contact">Contato</Link>
      </div>
    </nav>
    <Switch>
      <Route exact path="/to-do" component={ToDoList} />
      <Route exact path="/asyncronous-api" component={AsyncApi} />
      <Route exact path="/contact" component={Contact}/>
      <Route path="*" component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
