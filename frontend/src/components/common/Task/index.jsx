import React, {useRef, useState} from 'react';

import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


import {Drawer} from 'components/common'

import classnames from 'classnames'

import './style.scss'

const Task = props => {

    const {
        task,
        handleDelete,
        editTask,
        fetchUsers,
        users,
        type,
        style
    } = props
    
    const CloseIcon = (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="1.4142" y1="1.41423" x2="12.0208" y2="12.0208" stroke="white" stroke-width="2"/>
            <line x1="1.41423" y1="12.0207" x2="12.0208" y2="1.41407" stroke="white" stroke-width="2"/>
        </svg>
    )

    const pRef = useRef()
    const [visible, setVisible] = useState(false)

    const handleOpen = () => {        
        setVisible(true)
    }

    const handleClose = () => {
        setVisible(false)
    }

    const deleteTask = () => {
        handleDelete(pRef.current.textContent)
    }

    return (
        <div style={style} className={classnames('task-item', type)}>
            <div className="task-content">
                <p ref={pRef}>{task.text}</p>
                <div className="tools-block">
                    <Link to='#' onClick={handleOpen} className='edit'><FontAwesomeIcon className={"faPencilAlt-icon"} style={{fontSize: 12}} icon={faPencilAlt}/></Link>
                    <Link to='#' onClick={deleteTask} className='delete'><FontAwesomeIcon className={"faPencilAlt-icon"} style={{fontSize: 14}} icon={faTimes}/></Link>
                </div>
            </div>
            <Drawer users={users} fetchUsers={fetchUsers} editTask={editTask} visible={visible} handleClose={handleClose} task={task}/>
        </div>
    );
};

export default Task;