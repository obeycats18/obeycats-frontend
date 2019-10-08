import React from 'react';

import './style.scss'

const Item = ( {
    type, 
    name, 
    classname, 
    placeholder, 
    handleChange,
    handleBlur,
    value} ) => {
    return (
        <input 
            type={type} 
            name={name} 
            className={'form-item ' + classname} 
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value}/>
    );
};

export default Item;