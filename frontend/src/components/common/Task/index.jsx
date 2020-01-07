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