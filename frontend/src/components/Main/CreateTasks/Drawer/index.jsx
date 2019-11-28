import React, {useState} from 'react';
import { Drawer } from 'antd';
import {Item, Button} from 'components/common'
import classnames from 'classnames'

import './style.scss'

const DrawerEdit = props => {

    const {
        visible,
        taskText, 
        handleClose
    } = props;

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

    const [edit, setEdit] = useState({
        editMode: false,
        text: taskText,
        prevText: taskText
    })
    const handleDoubleClick = () => {
        setEdit({editMode: true, text: edit.text, prevText: edit.text})
    }

    const handleChange = e => {
        setEdit({
            editMode: true,
            text: e.target.value,
            prevText: edit.prevText
        })
    }

    const handleConfirm = () => {
        if(edit.text.replace('/(\r\n|\n|\r)/gm',"") !== "" ){
            setEdit({
                editMode: false, 
                text: edit.text,
                prevText: edit.text
            })
        }
        else{
            setEdit({
                editMode: false, 
                text: edit.prevText
            })
        }
    }

    const handleCancle = () => {
        setEdit({
            editMode: false, 
            text: edit.prevText
        })
    }

    // const handleKeyPressed = e => {
    //     if(e.key === "Enter" && (edit.text.replace('/(\r\n|\n|\r)/gm',"") !== "" )){
    //         setEdit({
    //             editMode: false, 
    //             text: edit.text,
    //             prevText: edit.text
    //         })
    //     }
    // }

    return (
        <div>
            <Drawer
                visible={visible}
                title="Редактирование"
                onClose={handleClose}
                width={580}
            >
            <div className="edit-wrapper">
                <div className="edit-text">
                    {
                        (edit.editMode)
                            ? <div className={"edit-block"}>
                                <Item 
                                    type='textarea' 
                                    classname={'task-input'} 
                                    value={edit.text}
                                    onChange={handleChange}
                                    // keyAction={handleKeyPressed}
                                    autofocus={true}/>
                                <div className="button-group">
                                    <Button text={CheckIcon} handleClick={handleConfirm} classname='confirm-button' typeButton='ok'/>
                                    <Button text={CloseIcon} handleClick={handleCancle} classname='close-button' typeButton='cancle'/>
                                </div>
                            </div>
                            : <p onDoubleClick={handleDoubleClick} className='task-text'>{edit.text}</p>
                    }
                </div>
                <div className="edit-status"></div>
                <div className="edit-description"></div>
                <div className="edit-developer"></div>
                <div className="edit-cost"></div>
                <div className="edit-priority"></div>
            </div> 
            </Drawer>
        </div>
    );
};

export default DrawerEdit;