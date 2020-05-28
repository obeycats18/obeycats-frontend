import React, { useEffect } from 'react';

import {connect} from 'react-redux'

import SprintContext from '../index';

import {fetchUsers} from 'redux/reducers/users'
import {setBacklog, changeTask} from 'redux/reducers/tasks'
import {addSprints, fetchSprints, editSprints, changeSprint} from 'redux/reducers/milestones'


export default connect( 
    ({users, tasks, sprints, projects}) => (
        {
            users: users.users, 
            backlog: tasks.backlog, 
            sprints: sprints.sprints,
            idProject: projects.idProject,
            idTask: tasks.idTask,
            isSprintFetching: sprints.isFetching,
            isTasksFetching: tasks.isFetching
        }
    ), 
    {
        fetchUsers, 
        setBacklog, 
        addSprints, 
        fetchSprints,
        editSprints,
        changeSprint,
        changeTask,
    }
)( (props) => {

    useEffect ( () => {
        props.fetchSprints(props.idProject)
        props.setBacklog(props.idProject)
    }, []) //props.sprints.length, props.backlog.length

    return  <SprintContext {...props}/>
});