# USAGE

1. Create a entitites file
2. Import all these methods
3. Re-export them in order to group them with other entity related actions you might have
4. you must have immutable path

# Set initial state from entities schema
const INITIAL_STATE = entitiesSchema

## Reducer
Pass reducing cases

import { entitiesReducingCases } from 'vendor/b-entities'
export default createReducer(INITIAL_STATE, entitiesReducingCases )

## Actions
import { storeEntities, storeNewEntity, storeData, removeEntity, removeEntityData } from 'vendor/b-entities/'
export { storeEntities, storeNewEntity, storeData, removeEntity, removeEntityData }
