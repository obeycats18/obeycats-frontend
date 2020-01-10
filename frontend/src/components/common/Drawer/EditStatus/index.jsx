import React from 'react';

import {Select} from 'components/common'

import './style.scss'

const EditStatus = props => {

    const {
        status,
        handleUpdate
    } = props;

    const options = [
        {label: 'ToDo', value: 'todo'},
        {label: 'В разработке', value: 'inDeveloping'},
        {label: 'Тестирование', value: 'testing'},
    ]

    const handleChange = value => {
        handleUpdate({status: value})
    }

    return (
        <div className="edit-status">
            <div className="description-section">
                <p>Cтатус</p>
               
            </div>
            <Select options={options} defaultValue={!status ? 'Статус задачи' : status} handleChange={handleChange}/>
        </div>
    );
};

export default EditStatus;