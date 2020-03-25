import React from 'react';

import {Select} from 'antd'

import './style.scss'

const {Option} = Select

const SelectBase = ({ 
    options,
    defaultValue,
    handleChange
}) => {
    return (
        <Select defaultValue={defaultValue} onChange={handleChange} >
            {
                options.map( (item) => <Option key={item.label} className='dropdown-list' value={item.value}>{item.label}</Option>)
            }
        </Select>
    );
};

export default SelectBase;