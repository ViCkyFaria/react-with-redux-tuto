import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  InputContainer,
  Label,
  Input
} from './indexStyle';


export default class InputField extends Component {
  render () {
    const { value, labelText, onChange } = this.props

    return (
      <InputContainer>
        <Label>{labelText}: </Label>
        <Input value={value} type="text" onChange={e => onChange(e.target.value)}/>
      </InputContainer>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}