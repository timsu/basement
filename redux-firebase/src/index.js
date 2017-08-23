// @flow weak
import { replaceAll } from '@bernatfortet/utils'
// Firebase Interface
// @flow weak

// Expose methods to interact with Firebase data
// Expose methods to interact with Firebase data using Entities

export function setData(dbRef, data){ return(dispatch, getState) => {
  console.log( `DB —— Saving ${dbRef.path}`, data)

  return dbRef.set(data)
    .then( () =>  console.log( `DB —— ${dbRef.path} Succesfully Saved`))
    .catch( error => console.log( `DB —— Saving ${dbRef.path} Failed ${error.message}`) )
}}

export function fetchData(dbRef){ return(dispatch, getState) => {
  console.log( `DB —— Fetching ${dbRef.path}`)

  return dbRef.once('value')
    .then( snapshot => {
      let data = orderSnapshot(snapshot)
      console.log( `DB — ${dbRef.path} Succesfully Fetched`, data )
      if( data == null )
        return Promise.reject( new Error(`DB - No ${dbRef.path} found:`) )
      else
        return data
    })
}}

export function pushData(dbRef, data){ return(dispatch, getState) => {
  console.log( `DB —— Pushing ${dbRef.path}`, data)

  return dbRef.push(data)
    .then( () =>  console.log( `DB —— ${dbRef.path} Succesfully Pushed`))
    .catch( error => console.log( `DB —— Pushing ${dbRef.path} Failed ${error.message}`) )
}}

export function removeData(dbRef) { return (dispatch, getState) => {
  console.log( `DB —— Removing ${dbRef.path}`)

  return dbRef.remove()
    .then( () =>  console.log( `DB —— ${dbRef.path} Succesfully Removed`) )
    .catch( error => console.log( `DB —— Removing ${dbRef.path} Failed ${error.message}`) )
}}

// Entities Methods
export function saveNewEntityToDb(firebaseApp, entityType, data) { return (dispatch, getState) => {
	const dbRef = firebaseApp.database().ref(`${entityType}/${data.id}`)
  return dispatch( setData(dbRef, data) )
}}

export function saveEntityDataToDb(firebaseApp, entityType, pathToData, data) { return (dispatch, getState) => {
	const validPathToData = getValidPathToData( pathToData )
	const dbRef = firebaseApp.database().ref(`${entityType}/${validPathToData}`)
  return dispatch( setData(dbRef, data) )
}}

export function deleteEntityInDb(firebaseApp, entityType) { return (dispatch, getState) => {
	const dbRef = firebaseApp.database().ref(`${entityType}`)
  return dispatch( removeData(dbRef) )
}}

export function deleteEntityDataInDB(firebaseApp, entityType, pathToData) { return (dispatch, getState) => {
	const validPathToData = getValidPathToData( pathToData )
	const dbRef = firebaseApp.database().ref(`${entityType}/${validPathToData}`)
  return dispatch( removeData(dbRef) )
}}


// Helpers

function orderSnapshot(snapshot){
  let data = {}
  snapshot.forEach( child => {
    data[child.key] = child.val()
  })
  return data
}

function getValidPathToData( path ){
	const pathIsInvalid = path.split('.').length > 1
  if( pathIsInvalid )
		return replaceAll('.', '/', path)
	else
		return path
}

/*
Usage

export function saveNewEntityToDb(entityType, data) { return (dispatch, getState) => {
  dispatch( db.saveNewEntityToDb(fbMikey, entityType, data) )
}}

export function saveEntityDataToDb(entityType, pathToData, data) { return (dispatch, getState) => {
  const path = replaceAll('.', '/', pathToData)
  dispatch( db.saveDataToDb(fbMikey, entityType, path, data) )
}}

export function deleteEntityInDb(entityType, pathToData) { return (dispatch, getState) => {
  dispatch( db.deleteEntityInDb(fbMikey, entityType, pathToData) )
}}

export function deleteEntityDataInDB(entityType, pathToData) { return (dispatch, getState) => {
  const path = replaceAll('.', '/', pathToData)
  dispatch( db.deleteEntityDataInDB(fbMikey, entityType, path) )
}}

// Makek sure all paths sent to the Firebase interface are using / instead of .
function replaceAll(replaceThis, withThis, inThis) {
  // From https://github.com/leecrossley/replaceall
  withThis = withThis.replace(/\$/g,"$$$$");
  return inThis.replace(new RegExp(replaceThis.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|<>\-\&])/g,"\\$&"),"g"), withThis)
}



*/
