import React,  { useEffect } from 'react';

import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import {compose} from 'redux'

import { Spin, Icon, Empty } from 'antd';

import {setTasks} from 'redux/reducers/tasks'

import Tasks from '../index'

const TaskContainer = props => {
    console.log("tasks ctrl", props)

    let idProject = props.location.search.split('=')[1]
    useEffect ( () => {
        props.setTasks(idProject, props.isDeveloper)
    }, [props.tasks.length])

    return (
        (props.isTasksFetching)
            ? <div className='fetching-block'><Spin indicator={<Icon type="loading" style={{ fontSize: 36 }} spin />}/></div>
            : <>
                {
                    (props.isEmpty)
                    ? <div className='empty-block'>
                        <Empty description='Задач еще нет'/>    
                    </div>
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