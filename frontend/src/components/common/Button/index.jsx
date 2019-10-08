import React from 'react';

import './style.scss'

const Button = ( {isSubmitting, classname, type, text} ) => {
    return (
        <button type={type} disabled={isSubmitting} className={'button ' + classname}>{text}</button>
    );
};

export default Button;