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

const hideVisually = css` border: 0; clip: rect(0 0 0 0); clipPath: inset(50%); height: 1px; margin: -1px; overflow: hidden; padding: 0; position: absolute; white-space: nowrap; width: 1px;
`

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
	${'' /* Flex Props */}
	${ p => p.jcc 		? s.jcc : '' }
	${ p => p.jcsa 		? s.jcsa : '' }
	${ p => p.jcsb 		? s.jcsb : '' }
	${ p => p.jcfs 		? s.jcfs : '' }
	${ p => p.jcfe 		? s.jcfe : '' }

	${ p => p.aic 		? s.aic : '' }
	${ p => p.aifs 		? s.aifs : '' }
	${ p => p.aife 		? s.aife : '' }

	${ p => p.ass   	? s.ass : '' }
	${ p => p.asfs   	? s.asfs : '' }
	${ p => p.asfe   	? s.asfe : '' }
	${ p => p.asc   	? s.asc : '' }

	${ p => p.wrap 		? s.flxWrap : '' }
	${ p => p.flex 		? `flex:${p.flex};` : '' }
	${ p => p.order   ? `order:${p.order};` : '' }

	${'' /* Margin Props */}
	${ p => p.mh   	? `margin-left:${p.mh}px; margin-right:${p.mh}px;` : '' }
	${ p => p.mv   	? `margin-top:${p.mv}px; margin-bottom:${p.mv}px;` : '' }
	${ p => p.mt   	? `margin-top:${p.mt}px;` : '' }
	${ p => p.mr   	? `margin-right:${p.mt}px;` : '' }
	${ p => p.mb   	? `margin-bottom:${p.mt}px;` : '' }
	${ p => p.ml   	? `margin-left:${p.mt}px;` : '' }

	${'' /* Padding Props */}
	${ p => p.ph   	? `padding-left:${p.ph}px; padding-right:${p.ph}px;` : '' }
	${ p => p.pv   	? `padding-top:${p.pv}px; padding-bottom:${p.pv}px;` : '' }
	${ p => p.pt   	? `padding-top:${p.pt}px;` : '' }
	${ p => p.pr   	? `padding-right:${p.pt}px;` : '' }
	${ p => p.pb   	? `padding-bottom:${p.pt}px;` : '' }
	${ p => p.pl   	? `padding-left:${p.pt}px;` : '' }


	${'' /* Media Props */}
	${p => p.smHide ? media.sm` ${hideVisually}` : '' }
	${p => p.mdHide ? media.md` ${hideVisually}` : '' }
	${p => p.lgHide ? media.lg` ${hideVisually}` : '' }
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
export const Spacer = styled(Root)` ${p => p.w ? `width:${p.w}px`: ''}  ${p => p.h ? `height:${p.h}px`: ''} `
export const Card = styled(Rounded, Row)`padding:20px; background-color:white; ${s.cardShadow} `

export const Circle = styled(Root)`
  width: ${ p => p.size ? p.size : 24 }px; height: ${ p => p.size ? p.size : 24 }px; background-color: grey; border-radius:50%;`

export const ScreenContainer = styled(Root)` width:100%; height:100%; ${s.flxRow} ${s.jcsb} ${s.aic} `


// Helpers

export { c, globalStyles as s }
