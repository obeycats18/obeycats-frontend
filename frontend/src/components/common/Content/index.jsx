import React from 'react';

import classnames from 'classnames'
import './style.scss'

const Content = ( {children, type, style, classname} ) => {
    return (
        <div style={style} className={classnames('content', type, classname)}>
            {children}
        </div>
    );
};

export default Content;