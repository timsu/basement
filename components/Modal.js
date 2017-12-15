// @flow
import React, { Component } from 'react'

export default class Modal extends Component {

  static defaultProps = {
    children: {},
    className: '',
    onCloseModal: () => {},
  }

  render(){
    const { className } = this.props
    return(
      <Wrapper vCenter hCenter className={className}>
        <Background onClick={this.onCloseModal} />
        {this.props.children}
      </Wrapper>
    )
  }

  onCloseModal = () => {
    this.props.onCloseModal()
  }

}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Wrapper = styled(Column)` z-index:1000; position:fixed; width:100%; height:100%; top:0; left:0; `
  const Background = styled.div`
    z-index:-10; position:fixed; width:100%; height:100%; top:0; left:0;
    background:rgba(0,0,0,0.8);
    ${s.unselectable} transition:all 800ms;
    &:hover{ background:${m.colors.black40}; transition:all 800ms; ${s.anchor} }
  `
