import React from 'react';

import {Select} from 'components'

import './style.scss'

const EditStatus = props => {

    const {
        status,
        handleUpdate
    } = props;

    // const options = status.map(item => ({
    //     label: item.name,
    //     value: item.name
    // }))

    const options = [
        {label: 'Todo', value: 'Todo'},
        {label: 'В разработке', value: 'В разработке'},
        {label: 'Завершенные', value: 'Завершенные'},
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