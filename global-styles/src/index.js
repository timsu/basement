import styled from 'styled-components'
import { s } from './global-styles'
import { c } from './global-colors'

export { c, s }

export const Column = styled.div`
  ${ p => p.hCenter ? 'align-items:: center' : '' }
  ${ p => p.vCenter ? 'justify-content: center' : '' }
  ${s.flxCol}
`
export const Row = styled.div`
  ${ p => p.hCenter ? 'justify-content: center' : '' }
  ${ p => p.vCenter ? 'align-items: center' : '' }
  ${s.flxRow}
`

export const Rounded = styled.div` border-radius: ${ p => p.radius ? p.radius : 6 }px `
export const Card = styled(Rounded, Row)`padding:20px; background-color:white; ${s.cardShadow} `

export const Circle = styled.div`
  width: ${ p => p.size ? p.size : 24 }px; height: ${ p => p.size ? p.size : 24 }px; background-color: grey; border-radius:50%;`

export const ScreenContainer = styled.div` width:100%; height:100%; ${s.flxRow} ${s.jcsb} ${s.aic} `
