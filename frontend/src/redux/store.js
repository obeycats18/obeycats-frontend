import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/auth'

const reducers = combineReducers({
    auth: authReducer
});

const store = createStore( reducers, applyMiddleware(thunk) )

window.store = store;

export default store;