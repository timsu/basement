// @flow
import React, { Component } from 'react'

export default class ClassName extends Component {

  static defaultProps = {
    children: 'Press Button',
    className: '',
    onClick: event => {}
  }

  render(){
    const { backgroundColor, className, onClick } = this.props
    return(
      <Wrapper className={className} onClick={onClick} >
        {this.props.children}
      </Wrapper>
    )
  }
}

// Styles
import styled, { css } from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled.div`
  padding:8px 16px; ${s.anchor} ${s.anim}
  background-color:${m.colors.brand}; border-radius:50px;
  color:white; font-weight:600;
  &:hover{ opacity:0.8; }

`
