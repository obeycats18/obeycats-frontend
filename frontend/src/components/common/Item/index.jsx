import React from 'react';

import './style.scss'

const Item = ( {
    type, 
    name, 
    classname, 
    placeholder, 
    onChange,
    onBlur,
    value,
    validateStatus,
    children} ) => {
    return (
        <div className="input-block">
            <input 
                type={type} 
                name={name} 
                className={'form-item ' + classname + ' ' + validateStatus} 
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
            />
            {children}
        </div>

    );
};

export default Item;