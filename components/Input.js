// @flow
import React, { Component } from 'react'

export default class Input extends Component {

  static defaultProps = {
    placeholder: 'Placholder Text',
    value: '',
    className: '',
    name: '',
    type: 'text',
    required: false,
    onFocus: event => {},
    onChange: event => {},
    onBlur: event => {},
  }

  state = {
    value: ''
  }

  componentWillMount(){
    const { value } = this.props
    this.setState({ value: value })

  }

  render(){
    const { placeholder, type, className, name, required } = this.props
    const { value } = this.state
    return(
      <InputField
        placeholder={placeholder}
        className={className}
        value={value}
        type={type}
        onFocus={this.onFocus}
        onChange={this.onChange}
        onBlur={this.onBlur}
        name={name}
        required={required}
       />
    )
  }

  onChange = ( event: Object ) => {
    const value = event.currentTarget.value
    this.setState({ value: value })
    this.props.onChange(value, event)
  }

  onFocus = ( event: Object ) => {
    this.props.onFocus(event)
  }

  onBlur = ( event: Object ) => {
    this.props.onBlur(event)
  }

  getValue(){
    return this.state.value
  }
}


// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const InputField = styled.input`
  flex:1; padding:20px; margin-bottom:8px; ${s.ass}
  background:${m.colors.black05}; ${m.rounding} border:0; outline:0;
  ${m.t1} ${s.anchor}

  &::placeholder{ color:${m.colors.black40}; }
  &:hover::placeholder{ color:${m.colors.black70}; }
  &:hover{}
  &:active{}
`
