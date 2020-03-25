import React, { useState } from 'react';

import {TextArea, Button} from 'components'

import './style.scss'

const EditDescription = props => {

    const CheckIcon = (
        <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.707107" y1="4.29289" x2="3.70711" y2="7.29289" stroke="white" stroke-width="2"/>
            <line x1="11.7071" y1="0.707107" x2="3.70711" y2="8.70711" stroke="white" stroke-width="2"/>
        </svg>
    )

    const CloseIcon = (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.4142" y1="1.41423" x2="12.0208" y2="12.0208" stroke="white" stroke-width="2"/>
            <line x1="1.41423" y1="12.0207" x2="12.0208" y2="1.41407" stroke="white" stroke-width="2"/>
        </svg>
    )

    const {
        handleUpdate,
        description
    } = props

    const [edit, setEdit] = useState({
        editMode: false,
        description: description,
        prevDescription: description
    })
    const handleClick = () => {
        setEdit({editMode: true, description: edit.description, prevDescription: edit.description})
    }

    const handleChange = e => {
        setEdit({
            editMode: true,
            description: e.target.value,
            prevDescription: edit.prevDescription
        })
    }

    const handleConfirm = e => {
        
        if((edit.description.trim() !== "")){
            setEdit({
                editMode: false, 
                description: edit.description,
                prevDescription: edit.description
            })
        }
        else{

            setEdit({
                editMode: false, 
                description: edit.prevDescription
            })
        }

        handleUpdate({description: edit.description})

    }

    const handleCancle = () => {
        setEdit({
            editMode: false, 
            description: edit.prevDescription
        })
    }

    return (
        <div className="edit-description">
            <div className="description-section">
                <p>Описание</p>
            </div>
            {
                (edit.editMode)
                    ? <div className={"edit-block"}>
                        <TextArea 
                            type='textarea' 
                            classname={'description-input'} 
                            value={edit.description}
                            onChange={handleChange}
                            placeholder='Добавить описание ...'
                            autofocus={true}
                            handleClick={handleClick}
                            />
                        <div className="button-group">
                            <Button text={CheckIcon} handleClick={handleConfirm} classname='confirm' typeButton='ok'/>
                            <Button text={CloseIcon} handleClick={handleCancle} classname='close' typeButton='cancle'/>
                        </div>
                    </div>
                    : <div className={"edit-block"}>
                        <TextArea 
                            type='textarea' 
                            classname={'description-input'} 
                            value={edit.description}
                            onChange={handleChange}
                            placeholder='Добавить описание ...'
                            autofocus={true}
                            handleClick={handleClick}
                            />
                    </div>
                }
            
        </div>
    );
};

export default EditDescription;