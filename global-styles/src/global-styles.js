export const s = {

  abs:            'position: absolute;',
  rel:            'position: relative;',
  flx1:           'flex: 1; display:flex;',
  flxRow:         'flex-direction: row; display:flex;',
	flxCol:         'flex-direction: column; display:flex;',
  flxRowReverse:  'flex-direction: row-reverse; display:flex;',
  flxColReverse:  'flex-direction: column-reverse; display:flex;',
  flxWrap:        'flex-wrap: wrap; display:flex;',
  aifs:           'align-items: flex-start; display:flex;',
  aic:            'align-items: center; display:flex;',
	ais:            'align-items: stretch; display:flex;',
  aife:           'align-items: flex-end; display:flex;',
  jcc:            'justify-content: center; display:flex;',
  jcfe:           'justify-content: flex-end; display:flex;',
  jcsb:           'justify-content: space-between; display:flex;',
  jcsa:           'justify-content: space-around; display:flex;',
  asfs:           'align-self: flex-start; display:flex;',
  asfe:           'align-self: flex-end; display:flex;',
  asc:            'align-self: center; display:flex;',
  ass:            'align-self: stretch; display:flex;',


  tal:            'text-align: left;',
  tac:            'text-align: center;',
  tar:            'text-align: right;',

  ofh:            'overflow: hidden;',
  rounded:        'borderRadius: 6px;',
  cardShadow:     'box-shadow 0 2px 8px rgba(0,0,0,0.2);',

  cover:          'background-size: cover;',
  contain:        'background-size: contain;',

  anchor:         'cursor: pointer;',

  full:           'width:100%; height:100%;',
	ellipsis:       'text-overflow: ellipsis; overflow: hidden; white-space: nowrap;',

	size: ( value = 20 ) => { return `width:${value}px; height:${value}px;` },

}
