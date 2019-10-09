import React from 'react';

import './style.scss'

const Checkbox = ( {text} ) => {
    return (
        <div className='checkbox-block'>
            <label className="checkbox">
                <input type="checkbox" />
                <div className="checkbox__text">{text}</div>
            </label>
        </div>
    );
};

export default Checkbox;