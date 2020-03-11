import React from 'react';

import {Content} from 'components/common'
import Task from './Task'

import './style.scss'

const Tasks = props => {

    const tasks = [
        {_id: 1, text: 'This defines a flex container; inline or block depending on the given value.', status: "TODO", priority: 3},
        {_id: 2, text: 'Task 2', status: "In Progress", priority: 1},
        {_id: 3, text: 'Task 3', status: "TODO", priority: 2},
        {_id: 4, text: 'Task 1', status: "TODO", priority: 1},
        {_id: 5, text: 'Task 2', status: "In Progress", priority: 2},
        {_id: 6, text: 'Task 3', status: "TODO", priority: 3},
    ]

    const AngleDown = (
        <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.39844 0.75C8.39844 0.6875 8.36719 0.617187 8.32031 0.570312L7.92969 0.179687C7.88281 0.132812 7.8125 0.101562 7.75 0.101562C7.6875 0.101562 7.61719 0.132812 7.57031 0.179687L4.5 3.25L1.42969 0.179687C1.38281 0.132812 1.3125 0.101562 1.25 0.101562C1.17969 0.101562 1.11719 0.132812 1.07031 0.179687L0.679688 0.570312C0.632813 0.617187 0.601563 0.6875 0.601563 0.75C0.601563 0.8125 0.632813 0.882812 0.679688 0.929687L4.32031 4.57031C4.36719 4.61719 4.4375 4.64844 4.5 4.64844C4.5625 4.64844 4.63281 4.61719 4.67969 4.57031L8.32031 0.929687C8.36719 0.882812 8.39844 0.8125 8.39844 0.75Z" fill="#000000"/>
        </svg>
    )

    return (
        <Content  type='create-block' classname="tasks-page">
            <h3>Задачи</h3>
            <div className="tasks-tools">
                <input type="search" placeholder="Поиск по задачам"/>
                <div className="tasks-sort">
                    <div className="task-sort-title">
                        <p>Сначала новые </p>
                        {AngleDown}
                    </div>
                </div>
            </div>
            <div className="tasks-wrapper">
                {
                    tasks.map(task => <Task task={task}/>)
                }
            </div>
        </Content>
    );
};

export default Tasks;