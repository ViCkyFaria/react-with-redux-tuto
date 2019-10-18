import { AsyncronousApi } from '../actions'

const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case AsyncronousApi.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

export default selectedSubreddit
