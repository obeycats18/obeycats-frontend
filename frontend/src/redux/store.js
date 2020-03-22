import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import authReducer from './reducers/auth'
import projectsReducer from './reducers/projects'
import tasksReducer from './reducers/tasks'

import usersReducer from './reducers/users'
import globalReducer from './reducers/global'
import sprintsReducer from './reducers/milestones'
import teamsReducer from './reducers/teams'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    auth: authReducer,
    projects: projectsReducer,
    tasks: tasksReducer,
    users: usersReducer,
    global: globalReducer,
    sprints: sprintsReducer,
    teams: teamsReducer

});

const store = createStore( 
    reducers,
    composeEnhancers(
        applyMiddleware(
            thunk
        )
    ) 
)

export default store;