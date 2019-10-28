import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/auth'
import projectsReducer from './reducers/projects'
import usersReducer from './reducers/users'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    users: usersReducer
});

const store = createStore( 
    reducers,
    composeEnhancers(applyMiddleware(thunk)) )

export default store;