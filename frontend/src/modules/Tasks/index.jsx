import React from 'react';

import {Task} from 'components'

import './style.scss'

const Tasks = props => {
    
    const {tasks} = props

    return tasks.map(task => <Task key={task._id} type="page" task={task}/>)
};

export default Tasks;