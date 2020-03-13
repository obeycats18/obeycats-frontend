import React,  { useEffect } from 'react';

import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {compose} from 'redux'

import { Spin, Icon } from 'antd';

import {setTasks} from 'redux/reducers/tasks'

import Tasks from '../index'

const TaskContainer = props => {
    console.log("tasks ctrl", props)

    let idProject = props.location.search.split('=')[1]
    useEffect ( () => {
        props.setTasks(idProject)
    }, [props.tasks.length])

    return (
        (props.isTasksFetching)
            ? <div className='fetching-block'><Spin indicator={<Icon type="loading" style={{ fontSize: 36 }} spin />}/></div>
            : <Tasks {...props}/>
        
    );
};

export default compose(
    connect( 
        ({ tasks, projects}) => (
            {
                tasks: tasks.tasks, 
                idProject: projects.idProject,
                idTask: tasks.idTask,
                isTasksFetching: tasks.isFetching
            }
        ), 
        { setTasks }
    ),
    withRouter
)(TaskContainer);