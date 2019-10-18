import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Ul, Li } from './indexStyles'

export default class Posts extends Component {
  render() {
    return (
      <Ul>
        {this.props.posts.map((post, i) => (
          <Li key={i}>{post.title}</Li>
        ))}
      </Ul>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}
