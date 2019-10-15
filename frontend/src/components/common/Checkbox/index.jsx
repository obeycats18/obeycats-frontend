import React from 'react';

import './style.scss'

const Checkbox = ( {text, onChange, value, name} ) => {
    return (
        <div className='checkbox-block'>
            <label className="checkbox">
                <input name={name} type="checkbox" onChange={onChange} value={value}/>
                <div className="checkbox__text">{text}</div>
            </label>
        </div>
    );
};

export default Checkbox;