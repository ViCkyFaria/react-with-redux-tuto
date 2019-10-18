import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Select, Option } from './indexStyle'

export default class Picker extends Component {
  render() {
    const { value, onChange, options } = this.props

    return (
      <span>
        <h1>{value}</h1>
        <Select onChange={e => onChange(e.target.value)} value={value}>
          {options.map(option => (
            <Option value={option} key={option}>
              {option}
            </Option>
          ))}
        </Select>
      </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
