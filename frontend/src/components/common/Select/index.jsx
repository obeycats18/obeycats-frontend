import React from 'react';
import Select from 'react-select';

import './style.scss'

const SelectBase = ({ 
    options,
    classname, 
    classnameprefix, 
    value, 
    onChange, 
    onFocus, 
    children, 
    onBlur, 
    type, 
    inputName,
    handleMenuOpen,
}) => {
    return (
        <div className='select-block'>
            <Select 
                options={options} 
                className={classname}   /*"select"*/ 
                classNamePrefix={classnameprefix} /*'select'*/
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                type={type}
                name={inputName}
            />
            {children}
        </div>
    );
};

export default SelectBase;