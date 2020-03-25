import React, { useState } from 'react';

import './style.scss'
import {Input} from 'components';

const EditCost = props => {

    const {
        handleUpdate
    } = props

    const [value, setValue] = useState(null)

    const handleChange = e => {
        setValue(parseInt(e.target.value))
    }

    const handleBlur = () => {
        handleUpdate({cost: value})
    }

    return (
        <div className="edit-cost">
            <div className="description-section">
                <p>Сложность задачи (сторипоинт)</p>
            </div>
            <Input
                type='number'
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                classname='cost-input'
            />
        </div>
    );
};

export default EditCost;