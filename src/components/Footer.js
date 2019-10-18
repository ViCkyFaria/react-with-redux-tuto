import React from 'react'
import FilterLink from '../containers/ToDoList/FilterLink'
import { ToDoList } from '../actions'

const Footer = () => (
  <p>
    Show: <FilterLink filter={ToDoList.VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={ToDoList.VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={ToDoList.VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
)

export default Footer
