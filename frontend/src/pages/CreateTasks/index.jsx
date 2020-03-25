import React from 'react';

import {Content} from 'components';
import {CreateTasksForm} from 'modules'

import './style.scss'

const CreateTask = props => {

    
    return (
       <Content type='create-block' classname="create-tasks-block">
            <h3>Бэклог</h3>
            <div className='create-task-wrapper'>
                <span className='description'>Добавление задач в бэклог</span>
                <CreateTasksForm/>
            </div>
       </Content>
    );
};

export default CreateTask;