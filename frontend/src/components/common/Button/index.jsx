import React from 'react';

import './style.scss'

import classnames from 'classnames'

const Button = ( {isSubmitting, classname, type, typeButton, text, handleClick} ) => {
    return (
        <button 
            type={type} 
            disabled={isSubmitting} 
            className={classnames('button' , classname, typeButton)}
            onClick={handleClick}
        >{text}</button>
    );
};

export default Button;