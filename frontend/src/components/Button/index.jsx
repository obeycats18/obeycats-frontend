import React from 'react';

import './style.scss'

import classnames from 'classnames'

const Button = ( props ) => {

    const {
        isSubmitting, 
        classname, 
        type, 
        typeButton, 
        text, 
        handleClick, 
        dataName,
        size
    } = props

    return (
        <button 
            type={type} 
            disabled={isSubmitting} 
            className={classnames('button' , classname, typeButton, `button-${size}`)}
            onClick={handleClick}
            data-name={dataName}
        >{text}</button>
    );
};

export default Button;