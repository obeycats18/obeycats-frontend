import React, {useEffect} from 'react';

import {Select} from 'components/common'

import './style.scss'

const EditStatus = props => {

    const {
        developer,
        users,
        fetchUsers,
        handleUpdate
    } = props;

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers, users.lenght])

    const options = users

    const handleChange = value => {
        handleUpdate({developer: value})
    }

    return (
        <div className="edit-status">
            <div className="description-section">
                <p>Исполнитель</p>
               
            </div>
            <Select options={options} defaultValue={developer ? options.forEach(item => item.value === developer ? item.label : 'Выберите испольнителя') : 'Выберите испольнителя'} handleChange={handleChange}/>
        </div>
    );
};

export default EditStatus;