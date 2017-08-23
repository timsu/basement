import styled from 'styled-components'
import { View } from 'react-native'

import { s } from './global-styles'
import { c } from './global-colors'
export { c, s }

const Root = styled(View)``

export const Column = styled(Root)`
  ${ p => p.hCenter ? s.aic : '' }
  ${ p => p.vCenter ? s.jcc : '' }
	${ p => p.jcsa 		? s.jcsa : '' }
	${ p => p.jcsb 		? s.jcsb : '' }
	${ p => p.aifs 		? s.aifs : '' }
	${ p => p.aife 		? s.aife : '' }
  ${s.flxCol}
`
export const Row = styled(Root)`
  ${ p => p.hCenter ? s.jcc : '' }
	${ p => p.vCenter ? s.aic : '' }
	${ p => p.jcsa 		? s.jcsa : '' }
	${ p => p.jcsb 		? s.jcsb : '' }
	${ p => p.aifs 		? s.aifs : '' }
	${ p => p.aife 		? s.aife : '' }
  ${s.flxRow}
`

export const Flex1 = styled(Root)` display:flex; flex:1;`

export const CircularAvatar = styled(Root)`
	width:${p => p.size}px; height:${p => p.size}px;
	background-image:url(${p => p.imageUrl}); background-size:contain;
	border-radius:50%;
`

export const Rounded = styled(Root)` border-radius: ${ p => p.radius ? p.radius : 6 }px `
export const Card = styled(Rounded, Row)`padding:20px; background-color:white; ${s.cardShadow} `

export const Circle = styled(Root)`
  width: ${ p => p.size ? p.size : 24 }px; height: ${ p => p.size ? p.size : 24 }px; background-color: grey; border-radius:50%;`

export const ScreenContainer = styled(Root)` width:100%; height:100%; ${s.flxRow} ${s.jcsb} ${s.aic} `
