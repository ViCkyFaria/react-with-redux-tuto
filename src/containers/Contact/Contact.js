import React, { Component } from 'react';

import InputField from '../../components/InputField';
import TextareaField from '../../components/TextareaField';

export default class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',  
      email: '',
      message: ''
    }

    this.onEmailChange = this.onEmailChange.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onMessageChange = this.onMessageChange.bind(this)
  }

  onEmailChange(value) {
    this.setState({email: value})
  }

  onNameChange(value) {
    this.setState({name: value})
  }

  onMessageChange(value) {
    this.setState({message: value})
  }

  render () {
    return (
      <div>
        <p>
          Form de contato exemplo!!
        </p>
        <form>
          <InputField 
            value={this.state.name} 
            labelText="Nome" 
            onChange={this.onNameChange}/>
          <InputField 
            value={this.state.email} 
            labelText="Email" 
            onChange={this.onEmailChange}/>
          <TextareaField 
            value={this.state.message} 
            labelText="Mensagem" 
            onChange={this.onMessageChange}/>
        </form>
      </div>
    );
  }
}