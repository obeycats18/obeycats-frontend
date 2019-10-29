import React from 'react';

import './style.scss'
import classnames from 'classnames'

const Checkbox = ( {text, onChange, value, name, typeCheckbox} ) => {
    return (
        <div className={classnames('checkbox-block', typeCheckbox)}>
            <label className="checkbox">
                <input name={name} type="checkbox" onChange={onChange} value={value}/>
                <div className="checkbox__text">{text}</div>
            </label>
        </div>
    );
};

export default Checkbox;