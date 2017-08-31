// @flow weak

import immutable from 'object-path-immutable'
import * as TYPE from './actionTypes'

// Reducing Cases
const entitiesHandlers = {
  [TYPE.STORE_ENTITIES]( state, { entities } ) {
    return { ...state, ...entities }
  },
	[TYPE.STORE_ENTITIY]( entities, { entityType, data } ) {
    return immutable.set( entities, `${entityType}`, data )
  },
  [TYPE.STORE_NEW_ENTITY]( entities, { entityType, data } ) {
    return immutable.set( entities, `${entityType}.${data.id}`, data )
  },
  [TYPE.STORE_ENTITY_DATA]( entities, { entityType, pathToData, data } ) {
    return immutable.set( entities, `${entityType}.${pathToData}`, data )
  },
  [TYPE.REMOVE_ENTITY]( entities, { entityType, id } ) {
    return immutable.del( entities, `${entityType}.${id}`)
  },
  [TYPE.REMOVE_ENTITY_DATA]( entities, { entityType, pathToData } ) {
    return immutable.del( entities, `${entityType}.${pathToData}`)
  },
}

function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export default function createEntitiesReducer(initialState){
  return createReducer( initialState, entitiesHandlers )
}
