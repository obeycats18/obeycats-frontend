import React from 'react';
import { Drawer } from 'antd';

import './style.scss'

import EditText from './EditText';
import EditStatus from './EditStatus';
import EditDescription from './EditDescription';
import EditCost from './EditCost';
import EditPriority from './EditPriority';

import {Button} from 'components/common'

const DrawerEdit = props => {

    const {
        visible,
        taskText, 
        handleClose
    } = props;

    return (
            <div>
                <Drawer
                    visible={visible}
                    title="Редактирование"
                    onClose={handleClose}
                    width={580}
                >
                <div className="edit-wrapper">
                    
                    <EditText taskText={taskText}/>
                    <EditStatus title='Статус'/>
                    <EditDescription/>
                    <EditStatus title='Исполнитель'/>
                    <EditCost />
                    <EditPriority />
                    
                    <div className="button-group">
                        <Button classname='cancle-button' typeButton='cancle' text='Отменить'/>
                        <Button classname='confirm-button' typeButton='ok' text='Сохранить'/>
                    </div>
                </div> 
                </Drawer>
            </div>
    );
};

export default DrawerEdit;