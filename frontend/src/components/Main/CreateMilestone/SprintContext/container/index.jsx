import React from 'react';

import {connect} from 'react-redux'

import SprintContext from '../';

import {fetchUsers} from 'redux/reducers/users'
import {setTasks} from 'redux/reducers/tasks'

import { useEffect } from 'react';

const ContextContainer = props => {

    useEffect( () => {
        props.setTasks()
    }, [props.tasks.length])


    return (
        <SprintContext {...props}/>
    );
};

export default connect( ({users, tasks}) => ({users: users.users, tasks: tasks.tasks}), {fetchUsers, setTasks})(ContextContainer);