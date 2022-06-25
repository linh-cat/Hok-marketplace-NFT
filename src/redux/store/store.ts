import { createStore } from 'redux';
import rootReducer from 'redux/reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from "redux-thunk"
const composeEnhancers = composeWithDevTools();
//,applyMiddleware(thunk)
const store = createStore(rootReducer, composeEnhancers);

export default store;
