import React from 'react';

import {connect} from 'react-redux'
import {setTasks} from 'redux/reducers/tasks'

import Backlog from '../index'

class BacklogContainer extends React.Component {

    componentDidMount() {
        this.props.setTasks()
    }

    render(){
        return (
            <Backlog {...this.props} />
        );
    }
};

export default connect(({tasks}) => ({tasks: tasks.tasks}), {setTasks})(BacklogContainer);