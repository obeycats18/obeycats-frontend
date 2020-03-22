import React from 'react';

import classNames from 'classnames'

import './style.scss'

const Input = ( props ) => {

    const {
        type, 
        name, 
        classname, 
        placeholder, 
        onChange,
        onClick,
        onBlur,
        value,
        validateStatus,
        keyAction,
        children,
        autofocus
    } = props

    return (
        <div className="input-block">
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                onClick={onClick}
                onBlur={onBlur}
                value={value}
                className={classNames("form-input", classname, validateStatus)}
                onKeyDown={keyAction}
                autoFocus={autofocus}
            />
            {children}
        </div>

    );
};

export default Input;