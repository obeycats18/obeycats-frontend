import React from 'react';

import './style.scss'

const Checkbox = ( {text} ) => {
    return (
        <div className='checkbox-block'>
            <label class="checkbox">
                <input type="checkbox" />
                <div class="checkbox__text">{text}</div>
            </label>
        </div>
    );
};

export default Checkbox;