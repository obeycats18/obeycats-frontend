import React, {useState} from 'react';
import classnames from 'classnames'

import Task from './Task'
import {Link} from 'react-router-dom'
import {Item} from 'components/common';

import './style.scss'

const TaskForm = props => {

    const Plus = (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8" y1="4.37113e-08" x2="8" y2="15" stroke="#10AC84" stroke-width="2"/>
            <line x1="15" y1="8" x2="-8.74228e-08" y2="8" stroke="#10AC84" stroke-width="2"/>
        </svg>
    )

    const [visible, setVisible] = useState(false)
    const [value, setValue ] = useState('')
    const [storeTask, setTask] = useState(
        {
            items: [{title: ''}]
        } 
    )

    const toggleVisible = () => {
        if(storeTask.items.length === 0){
            setVisible(true)
        }
        setVisible(!visible)
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleKeyPressed = e => {
        let newItems = []
        if(e.key === "Enter" && (e.target.value.trim() !== "" || e.target.value.length.trim() !== 0)){
            newItems = [...storeTask.items, {title: e.target.value}]
            setTask({items: newItems})
            setValue('')
        }
    }
    const deleteTask = (ref) => {
        const value = ref
        let filtred = storeTask.items.filter( item => item.title !== value)
        setTask({items: filtred})
    }

    const tasks = storeTask.items.map( (item,index) => {
        if(item.title !== ''){
            return <Task key={index} title={item.title} handleDelete={deleteTask}/>
        }

        return null
    })

    console.log(storeTask.items)

    return (
       <div className="create-block create-tasks-block">
            <h3>Бэклог</h3>
            <div className='create-task-wrapper'>
                <span className='description'>Добавление задач в бэклог</span>
                <div className="tasks-wrapper">
                    {tasks}
                    <div className="create-task">
                        <Link onClick={toggleVisible} to='#' className="create-task-link">{Plus}</Link>
                        <Item type='textarea' onChange={handleChange} keyAction={handleKeyPressed} value={value} classname={classnames('task-input', {visible}) } placeholder='Что нужно сделать?'/>
                    </div>
                </div>
            </div>
       </div>
    );
};

export default TaskForm;