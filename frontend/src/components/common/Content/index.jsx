import React from 'react';

import './style.scss'

const Content = ( {children, title} ) => {
    return (
        <div className='content'>
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default Content;