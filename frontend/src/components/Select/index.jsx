import React from 'react';

import {Select} from 'antd'

import './style.scss'

const {Option} = Select

const SelectBase = ( props ) => {
    return (
        <Select {...props} >
            {
                props.options.map( option => (
                    <Option key={option.label} className='dropdown-list' value={option.value} label={option.label}>
                        {
                            props.mode === 'multiple'
                                ? option.children
                                : option.label       
                        }
                    </Option>
                ))
            }
        </Select>
    );
};

export default SelectBase;