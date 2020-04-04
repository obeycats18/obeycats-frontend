import React,  { useEffect } from 'react';

import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {compose} from 'redux'

import {setTasks} from 'redux/reducers/tasks'

import Tasks from '../index'
import { Content } from 'components';

const TaskContainer = props => {

    let idProject = props.location.search.split('=')[1]
    
    useEffect ( () => {
        props.setTasks(idProject, props.isDeveloper)
    }, [props.tasks.length])

    return (
        (props.isTasksFetching)
            ? <Content type="fetching"/>
            : <>
                {
                    (props.isEmpty)
                    ? <Content type="empty" emptyText="Задач еще нет"/>
                    : <Tasks {...props}/>
                }
            </>
        
    );
};

export default compose(
    connect( 
        ({ tasks, projects}) => (
            {
                tasks: tasks.tasks, 
                idProject: projects.idProject,
                idTask: tasks.idTask,
                isTasksFetching: tasks.isFetching,
                isEmpty: tasks.isEmpty,
                
            }
        ), 
        { setTasks }
    ),
    withRouter
)(TaskContainer);