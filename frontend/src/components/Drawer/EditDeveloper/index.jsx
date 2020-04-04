import React from 'react';

import {Select} from 'components'

import './style.scss'

const EditStatus = props => {

    const {
        developer,
        members,
        handleUpdate
    } = props;

    // const developers =  members.filter(user => user.role.name === "developer")
    const options = members.map(member => ({value: member._id, label: member.last_name + member.first_name}))
console.log(options)
    const handleChange = value => {
        console.log(value)
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
                onChange={handleChange}/>
        </div>
    );
};

export default EditStatus;