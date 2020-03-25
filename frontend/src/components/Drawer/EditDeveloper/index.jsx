import React, {useEffect} from 'react';

import {Select} from 'components'

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

    console.log(users)
    const developers =  users.filter(user => user.role.name === "developer")
    const options = developers.map(developer => ({value: developer._id, label: developer.last_name + developer.first_name}))

    const handleChange = value => {
        handleUpdate({developer: value})
    }

    return (
        <div className="edit-status">
            <div className="description-section">
                <p>Исполнитель</p>
            </div>
            <Select 
                options={options} 
                defaultValue={
                    developer 
                        ? options.forEach(option => option._id === developer ? option.last_name + option.first_name  : 'Выберите испольнителя') 
                        : 'Выберите испольнителя'} 
                handleChange={handleChange}/>
        </div>
    );
};

export default EditStatus;