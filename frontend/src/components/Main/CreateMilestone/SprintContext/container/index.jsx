import React, { useEffect } from 'react';

import {connect} from 'react-redux'

import SprintContext from '../';

import {fetchUsers} from 'redux/reducers/users'
import {setTasks, changeTask} from 'redux/reducers/tasks'
import {addSprints, fetchSprints, editSprints, changeSprint} from 'redux/reducers/milestones'

const ContextContainer = props => {


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
            idTask: tasks.idTask
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