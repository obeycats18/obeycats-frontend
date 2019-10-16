import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore( 
    reducers,
    composeEnhancers(applyMiddleware(thunk)) )

window.store = store;

export default store;