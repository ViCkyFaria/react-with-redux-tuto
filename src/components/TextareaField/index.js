import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  TextareaContainer,
  Label,
  Textarea
} from './indexStyle';


export default class TextareaField extends Component {
  render () {
    const { value, labelText, onChange } = this.props

    return (
      <TextareaContainer>
        <Label>{labelText}: </Label>
        <Textarea 
          value={value} 
          type="text" 
          rows={6}
          onChange={e => onChange(e.target.value)}/>
      </TextareaContainer>
    );
  }
}

TextareaField.propTypes = {
  labelText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}