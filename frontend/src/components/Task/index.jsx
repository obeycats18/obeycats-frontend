import React, {useRef, useState} from 'react';

import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'


import {Drawer} from 'components'

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

    const LongArrow = (
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3536 4.35355C15.5488 4.15829 15.5488 3.84171 15.3536 3.64645L12.1716 0.464466C11.9763 0.269204 11.6597 0.269204 11.4645 0.464466C11.2692 0.659728 11.2692 0.976311 11.4645 1.17157L14.2929 4L11.4645 6.82843C11.2692 7.02369 11.2692 7.34027 11.4645 7.53553C11.6597 7.7308 11.9763 7.7308 12.1716 7.53553L15.3536 4.35355ZM0 4.5H15V3.5H0V4.5Z" fill="#FFFFFF"/>
        </svg>
    )

    switch(type) {
        case "page": return (
            <div className={classnames("prtasks-task", `border-${task.priority}`)}>
                <p className="task-text">
                    {task.text}
                </p>
                <div className="task-bottom">
                    <span className="task-status">{task.status}</span>
                    <Link className="task-download" to=''>Загрузить изменения {LongArrow}</Link>
                </div>
            </div>
        )

        case "board": return (
            <div className={classnames("board-task", `border-${task.priority}`)}>
                <p>{task.text}</p>
            </div>
        )

        default: return (
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
        )
    }

};

export default Task;