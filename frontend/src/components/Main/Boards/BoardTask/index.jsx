import React from 'react';

import classnames from 'classnames'

import './style.scss'

const BoardTask = props => {

    const {task} = props

    return (
        <div className={classnames("board-task", `border-${task.priority}`)}>
            <p>{task.text}</p>
        </div>
    );
};

export default BoardTask;