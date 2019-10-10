import React from 'react';

import './style.scss'

const Item = ( {
    type, 
    name, 
    classname, 
    placeholder, 
    onChange,
    onBlur,
    value} ) => {
    return (
        <input 
            type={type} 
            name={name} 
            className={'form-item ' + classname} 
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}/>
    );
};

export default Item;