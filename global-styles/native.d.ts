import * as ReactNative from 'react-native'
import * as React from 'react'

export type SpacingProps = {
  m?: number,
  mh?: number,
  mv?: number,
  mt?: number,
  mr?: number,
  mb?: number,
  ml?: number,
  p?: number,
  ph?: number,
  pv?: number,
  pt?: number,
  pr?: number,
  pb?: number,
  pl?: number,
}

export const Box: React.ComponentType<SpacingProps & ReactNative.ViewProperties>
export const Row: React.ComponentType<SpacingProps & ReactNative.ViewProperties>
export const Column: React.ComponentType<SpacingProps & ReactNative.ViewProperties>

export const s: {
  abs: string,
  absHCenter: string,
  absVCenter: string,
  rel: string,

  flx: string,
  flx1: string,
  flxRow: string,
  flxCol: string,
  flxRowReverse: string,
  flxColReverse: string,
  flxWrap: string,
  aifs: string,
  aic: string,
  ais: string,
  aife: string,

  jcc: string,
  jcfs: string,
  jcfe: string,
  jcsb: string,
  jcsa: string,

  asfs: string,
  asfe: string,
  asc: string,
  ass: string,

  jsfs: string,
  jsfe: string,
  jsc: string,
  jss: string,

  if: string,

  tal: string,
  tac: string,
  tar: string,

  ofh: string,
  rounded: string,
  cardShadow: string,

  cover: string,
  contain: string,

  anchor: string,

  full: string,
  ellipsis: string,
  fixedFull: string,
}
