import React from 'react';

import {Content} from 'components'
import {Tasks} from 'modules'

import './style.scss'

const TasksPage = ({isDeveloper}) => {

    return (
        <Content  type='create-block' classname="tasks-page">
            <h3>Задачи</h3>
            <div className="tasks-wrapper">
                <Tasks isDeveloper={isDeveloper}/>
            </div>
        </Content>
    );
};

export default TasksPage;