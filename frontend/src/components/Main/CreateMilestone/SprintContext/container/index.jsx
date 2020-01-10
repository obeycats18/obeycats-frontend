import React, { useEffect } from 'react';

import {connect} from 'react-redux'

import SprintContext from '../';

import {fetchUsers} from 'redux/reducers/users'
import {setTasks} from 'redux/reducers/tasks'
import {addSprints, fetchSprints} from 'redux/reducers/milestones'

const ContextContainer = props => {

    useEffect( () => {
        props.setTasks(props.idProject)
        props.fetchSprints(props.idProject)
    }, [props.tasks.length, props.sprints.length])


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
            idProject: projects.idProject
        }
    ), 
    {
        fetchUsers, 
        setTasks, 
        addSprints, 
        fetchSprints
    }
)(ContextContainer);