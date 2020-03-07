import React from 'react';

import {connect} from 'react-redux'

import SprintContext from '../';

import {fetchUsers} from 'redux/reducers/users'
import {setTasks, changeTask} from 'redux/reducers/tasks'
import {addSprints, fetchSprints, editSprints, changeSprint} from 'redux/reducers/milestones'
import { useEffect } from 'react';

const ContextContainer = props => {

    useEffect ( () => {
        props.fetchSprints(props.idProject)
        props.setTasks(props.idProject)
    }, [props.sprints.length, props.tasks.length])

    return (
        <SprintContext {...props}/>
    );
};

export default connect( 
    ({users, tasks, sprints, projects}) => (
        {
            users: users.users, 
            tasks: tasks.tasks, 
            sprints: sprints.sprints,
            idProject: projects.idProject,
            idTask: tasks.idTask,
            isSprintFetching: sprints.isFetching,
            isTasksFetching: tasks.isFetching
        }
    ), 
    {
        fetchUsers, 
        setTasks, 
        addSprints, 
        fetchSprints,
        editSprints,
        changeSprint,
        changeTask,
    }
)(ContextContainer);