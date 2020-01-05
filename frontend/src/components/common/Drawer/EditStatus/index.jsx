import React from 'react';

// import {Select} from 'components/common'
import { Select } from 'antd';

import './style.scss'

const { Option } = Select;


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
            <Select defaultValue={!status ? 'Статус задачи' : status} onChange={handleChange} > 
                {
                    options.map( (item) => <Option key={item.label} className='dropdown-list' value={item.value}>{item.label}</Option>)
                }
            </Select>
        </div>
    );
};

export default EditStatus;