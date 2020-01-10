import React from 'react';

import './style.scss'

import classnames from 'classnames'

const Button = ( {isSubmitting, classname, type, typeButton, text, handleClick, dataName} ) => {
    return (
        <button 
            type={type} 
            disabled={isSubmitting} 
            className={classnames('button' , classname, typeButton)}
            onClick={handleClick}
            data-name={dataName}
        >{text}</button>
    );
};

export default Button;