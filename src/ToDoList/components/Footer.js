import React from 'react'
import FilterLink from '../containers/FilterLink'
import toDo from '../actions'

const Footer = () => (
  <p>
    Show: <FilterLink filter={toDo.toDo.VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={toDo.toDo.VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    {', '}
    <FilterLink filter={toDo.toDo.VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </p>
)

export default Footer
