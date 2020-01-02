import React from 'react';
import { Drawer } from 'antd';

import './style.scss'

import EditText from './EditText';
import EditStatus from './EditStatus';
import EditDescription from './EditDescription';
import EditCost from './EditCost';
import EditPriority from './EditPriority';
import EditDeveloper from './EditDeveloper';


import {Button} from 'components/common'

const DrawerEdit = props => {

    const {
        visible,
        task, 
        handleClose,
        editTask,
        fetchUsers,
        users
    } = props;


    let updatedTask = {}
    const handleUpdate = (task) => {
        updatedTask = {...updatedTask, ...task}
    }

    const handleConfirm = () => {
        let newTask = {...task, ...updatedTask}
        editTask(newTask)
    }

    return (
            <div>
                <Drawer
                    visible={visible}
                    title="Редактирование"
                    onClose={handleClose}
                    width={580}
                >
                <div className="edit-wrapper">
                    
                    <EditText handleUpdate={handleUpdate} text={task.text}/>
                    <EditStatus handleUpdate={handleUpdate} status={task.status}/>
                    <EditDescription handleUpdate={handleUpdate} description={task.description}/>
                    <EditDeveloper users={users} fetchUsers={fetchUsers} handleUpdate={handleUpdate} developer={task.developer}/>
                    <EditCost handleUpdate={handleUpdate} cost={task.cost}/>
                    <EditPriority handleUpdate={handleUpdate} priority={task.priority}/>
                    
                    <div className="button-group">
                        <Button classname='cancle-button' typeButton='cancle' text='Отменить'/>
                        <Button classname='confirm-button' handleClick={handleConfirm} typeButton='ok' text='Сохранить'/>
                    </div>
                </div> 
                </Drawer>
            </div>
    );
};

export default DrawerEdit;