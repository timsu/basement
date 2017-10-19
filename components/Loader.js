// @flow
import React, { Component } from 'react'

import 'react-activity/dist/react-activity.css'
import { Spinner } from 'react-activity'

export default class Loader extends Component {

  static defaultProps = {
    color: '#727981',
    size: 20,
    speed: 0.6,
  }

  render(){
    const { color, size, speed } = this.props
    return <Indicator color={color} size={size} speed={speed} />
  }
}

// Styles
import styled from 'styled-components'
import { s, c, Row, Column } from '@bernatfortet/global-styles'
import * as m from 'styles/main'

const Indicator = styled(Spinner)` display:flex !important; flex:1; ${s.jcc} ${s.aic}  `
