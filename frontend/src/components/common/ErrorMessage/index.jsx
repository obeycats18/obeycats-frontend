import React from 'react';

import './style.scss'

const ErrorMessage = ( { text } ) => {
    return (
        <div className="error-message">
            {text}
        </div>
    );
};

export default ErrorMessage;