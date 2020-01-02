import React, {useEffect} from 'react';

// import {Select} from 'components/common'
import { Select } from 'antd';

import './style.scss'

const { Option } = Select;


const EditStatus = props => {

    const {
        developer,
        users,
        fetchUsers,
        handleUpdate
    } = props;

    useEffect(() => {
        fetchUsers()
    }, [users.lenght])

    const options = users

    const handleChange = value => {
        handleUpdate({developer: value})
    }

    return (
        <div className="edit-status">
            <div className="description-section">
                <p>Исполнитель</p>
               
            </div>
            <Select defaultValue={developer ? options.forEach(item => item.value === developer ? item.label : 'Выберите испольнителя') : 'Выберите испольнителя'} onChange={handleChange} style={{ width: 280 }}>
                {
                    options.map( (item) => <Option className='dropdown-list' value={item.value}>{item.label}</Option>)
                }
            </Select>
        </div>
    );
};

export default EditStatus;