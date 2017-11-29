import styled, { css } from 'styled-components'

import { s } from './global-styles'
import { c } from './global-colors'


const size = (size) => `width:${size ? size : 24}px; height:${size ? size : 24}px;`
const anim = css` transition:100ms;
	&:hover{ transition: all 250ms; }
`
const icon = css` width:${p => p.size}px; height:${p => p.size}px; font-size:${p => p.size}px; `

const unselectable = css` user-select:none; & * { user-select:none; } `
const untouchable = css` ${unselectable} pointer-events:none; & * { pointer-events:none; }  `
const actionable = css` ${unselectable} cursor:pointer;  `

const media = {
  sm: (...args) => css`
    @media (max-width: 500px) {
      ${ css(...args) }
    }
  `,
	md: (...args) => css`
    @media (max-width: 768px) {
      ${ css(...args) }
    }
  `,
	lg: (...args) => css`
    @media (max-width: 1100px) {
      ${ css(...args) }
    }
  `
}

const baseTriangle = css` content:'';  width:0; height:0; `
export const triangleRight = ( size, color ) => css` ${baseTriangle}
	border-top:${size}px solid transparent; border-bottom:${size}px solid transparent; border-left:${size}px solid ${color}; }
`
export const triangleLeft = ( size, color ) => css` ${baseTriangle}
	border-top:${size}px solid transparent; border-bottom:${size}px solid transparent; border-right:${size}px solid ${color}; }
`
export const triangleUp = ( size, color ) => css` ${baseTriangle}
	border-left:${size}px solid transparent; border-right:${size}px solid transparent; border-bottom:${size}px solid ${color}; }
`
export const triangleDown = ( size, color ) => css` ${baseTriangle}
	border-left:${size}px solid transparent; border-right:${size}px solid transparent; border-top:${size}px solid ${color}; }
`


const globalStyles = {
	...s,
	size,
	anim,
	icon,
	media,
	unselectable,
	untouchable,
	actionable,
	triangleRight,
	triangleLeft,
	triangleUp,
	triangleDown,
}

const Root = styled.div``

const commonProps = css`
	${ p => p.jcc 		? s.jcc : '' }
	${ p => p.jcsa 		? s.jcsa : '' }
	${ p => p.jcsb 		? s.jcsb : '' }
	${ p => p.jcfs 		? s.jcfs : '' }
	${ p => p.jcfe 		? s.jcfe : '' }
	${ p => p.aic 		? s.aic : '' }
	${ p => p.aifs 		? s.aifs : '' }
	${ p => p.aife 		? s.aife : '' }
	${ p => p.ass   	? s.ass : '' }

	${ p => p.flex 		? `flex:${p.flex};` : '' }
	${p => p.smHide ? media.sm` display:none;` : '' }
	${p => p.mdHide ? media.md` display:none;` : '' }
	${p => p.lgHide ? media.lg` display:none;` : '' }
`

export const Column = styled(Root)`
  ${ p => p.hCenter ? s.aic : '' }
  ${ p => p.vCenter ? s.jcc : '' }
	${commonProps}
  ${s.flxCol}
`
export const Row = styled(Root)`
  ${ p => p.hCenter ? s.jcc : '' }
	${ p => p.vCenter ? s.aic : '' }
	${commonProps}
  ${s.flxRow}
`

export const Flex1 = styled(Root)` display:flex; flex:1;`

export const CircularAvatar = styled(Root)`
	width:${p => p.size}px; height:${p => p.size}px;
	background-image:url(${p => p.imageUrl}); background-size:contain;
	border-radius:50%;
`

export const Rounded = styled(Root)` border-radius: ${ p => p.radius ? p.radius : 6 }px `
export const Spacer = styled(Root)` width:${ p => p.w}px; height:${ p => p.w}px; `
export const Card = styled(Rounded, Row)`padding:20px; background-color:white; ${s.cardShadow} `

export const Circle = styled(Root)`
  width: ${ p => p.size ? p.size : 24 }px; height: ${ p => p.size ? p.size : 24 }px; background-color: grey; border-radius:50%;`

export const ScreenContainer = styled(Root)` width:100%; height:100%; ${s.flxRow} ${s.jcsb} ${s.aic} `


// Helpers

export { c, globalStyles as s }
