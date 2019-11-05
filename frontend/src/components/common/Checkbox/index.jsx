import React from 'react';

import './style.scss'
import classnames from 'classnames'

const Checkbox = ( {text, handleChange, value, name, typeCheckbox, dataId} ) => {
    return (
        <div className={classnames('checkbox-block', typeCheckbox)}>
            <label className="checkbox">
                <input name={name} data-id={dataId} type="checkbox" onChange={handleChange} value={value}/>
                <div className="checkbox__text">{text}</div>
            </label>
        </div>
    );
};

export default Checkbox;