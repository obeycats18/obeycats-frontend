import React from 'react';

import './style.scss'

const Block = ( {classname, children} ) => {
    return (
        <div className={'block ' + classname }>
            {children}
        </div>
    );
};

export default Block;