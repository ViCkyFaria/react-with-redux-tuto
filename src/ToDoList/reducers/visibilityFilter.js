import toDo from '../actions'

console.log('ToDo',toDo.toDo)

const visibilityFilter = (state = toDo.toDo.VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter
