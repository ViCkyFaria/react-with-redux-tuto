import React, { Component } from 'react';

import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)


export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <div>
          <p>To Do List</p>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </Provider>
    );
  }
}
