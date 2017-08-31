// @flow weak
import immutable from 'object-path-immutable'
import * as TYPES from './actionTypes'


// Storing Actions
export function storeEntities( entities ){
  return { type: TYPES.STORE_ENTITIES, entities }
}
export function storeEntity( entityType, data ){
  return { type: TYPES.STORE_ENTITIY, entityType, data }
}
export function storeNewEntity( entityType, data ){
  if( !data.id || data.id == '' || data.id == undefined || data.id == null )
		console.log( 'ERROR — Entity Data requires an ID')
  return { type: TYPES.STORE_NEW_ENTITY, entityType, data }
}
export function storeEntityData( entityType, pathToData, data ){
  return { type: TYPES.STORE_ENTITY_DATA, entityType, pathToData, data }
}
export function removeEntity( entityType, id ){
  return { type: TYPES.REMOVE_ENTITY, entityType, id }
}
export function removeEntityData( entityType, pathToData ){
  return { type: TYPES.REMOVE_ENTITY_DATA, entityType, pathToData }
}
