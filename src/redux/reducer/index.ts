import { combineReducers } from "redux";
import connectionReducer from './connectionReducer'
import collectionReducer from './collectionReducer'
import marketplaceReducer from './marketplaceReducer'
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    connection: connectionReducer,
    collection : collectionReducer,
    marketplace : marketplaceReducer,
    filter : filterReducer
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>