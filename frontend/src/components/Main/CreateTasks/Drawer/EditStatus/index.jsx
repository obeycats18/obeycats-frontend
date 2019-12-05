import React from 'react';

// import {Select} from 'components/common'
import { Select } from 'antd';

import './style.scss'

const { Option } = Select;


const EditStatus = props => {

    const {
        title
    } = props;

    const options = [
        {label: 'ToDo', value: 'todo'},
        {label: 'В разработке', value: 'inDeveloping'},
        {label: 'Тестирование', value: 'testing'},
    ]

    const currentStatus = 'Todo'

    return (
        <div className="edit-status">
            <div className="description-section">
                <p>{title}</p>
               
            </div>
            <Select defaultValue={currentStatus} style={{ width: 280 }}>
                {
                    options.map( (item) => <Option className='dropdown-list' value={item.value}>{item.label}</Option>)
                }
            </Select>
        </div>
    );
};

export default EditStatus;