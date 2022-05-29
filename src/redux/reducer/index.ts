import { combineReducers } from 'redux';
import connectionReducer from 'redux/reducer/connectionReducer';
import collectionReducer from 'redux/reducer/collectionReducer';
import marketplaceReducer from 'redux/reducer/marketplaceReducer';
import filterReducer from 'redux/reducer/filterReducer';

const rootReducer = combineReducers({
	connection: connectionReducer,
	collection: collectionReducer,
	marketplace: marketplaceReducer,
	filter: filterReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
