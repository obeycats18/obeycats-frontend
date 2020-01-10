import React, {useEffect} from 'react';

import {connect} from 'react-redux'
import {setTasks} from 'redux/reducers/tasks'

import Backlog from '../index'

const BacklogContainer = props => {

    useEffect(() => {
        props.setTasks(props.idProject)
    }, [idProject])

    return (
        <Backlog {...this.props} />
    );
    
};

export default connect(
    ({tasks, projects}) => ({tasks: tasks.tasks, idProject: projects.idProject}), 
    {setTasks}
)(BacklogContainer);