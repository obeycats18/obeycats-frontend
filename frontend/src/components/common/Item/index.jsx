import React from 'react';

import './style.scss'

const Item = ( {
    type, 
    name, 
    classname, 
    placeholder, 
    onChange,
    handleClick,
    onBlur,
    value,
    validateStatus,
    keyAction,
    children,
    autofocus
    } ) => {
    return (
        <div className="input-block">
            {/* {
                (type === 'textarea')
                    ? (<textarea 
                            type={type} 
                            name={name} 
                            className={'form-item ' + classname + ' ' + validateStatus} 
                            placeholder={placeholder}
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value || ''}
                            autofocus={autofocus}
                            onKeyPress={keyAction}
                        ></textarea>)
                    :  <input 
                            type={type} 
                            name={name} 
                            className={'form-item ' + classname + ' ' + validateStatus} 
                            placeholder={placeholder}
                            onChange={onChange}
                            onClick={handleClick}
                            onBlur={onBlur}
                            value={value || ''}
                            onKeyPress={keyAction}
                            
                        />
            } */}
            <input 
                type={type} 
                name={name} 
                className={'form-item ' + classname + ' ' + validateStatus} 
                placeholder={placeholder}
                onChange={onChange}
                onClick={handleClick}
                onBlur={onBlur}
                value={value || ''}
                onKeyPress={keyAction}
                
            />
           
            {children}
        </div>

    );
};

export default Item;