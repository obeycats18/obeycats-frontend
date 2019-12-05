import React, { useState } from 'react';

import {TextArea} from 'components/common'

import './style.scss'

const EditDescription = props => {

    const [value, setValue] = useState('')

    const handleChange = e => {
        setValue(e.target.value)
    }

    return (
        <div className="edit-description">
            <div className="description-section">
                <p>Описание</p>
                
            </div>
            <TextArea 
                    type='textarea' 
                    classname={'description-input'} 
                    value={value}
                    onChange={handleChange}
                    // keyAction={handleKeyPressed}
                    placeholder='Добавить описание ...'
                    autofocus={true}/>
        </div>
    );
};

export default EditDescription;