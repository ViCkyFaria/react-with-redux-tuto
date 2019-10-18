import React, { Component } from 'react';

import Footer from '../../components/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'

export default class ToDoList extends Component {
  render () {
    return (
      <div>
        <p>To Do List</p>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}
