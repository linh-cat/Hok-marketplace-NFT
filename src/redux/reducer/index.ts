import { combineReducers } from "redux";
import connectionReducer from './connectionReducer'
import collectionReducer from './collectionReducer'
import marketplaceReducer from './marketplaceReducer'

const rootReducer = combineReducers({
    connection: connectionReducer,
    collection : collectionReducer,
    marketplace : marketplaceReducer
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>