import React, {useState} from 'react';
import classnames from 'classnames'

import {Link} from 'react-router-dom'
import {TextArea, Button, Form, Task} from 'components/common';

import {generateNumber} from 'utils/generateNumber'

import './style.scss'

const TaskForm = props => {

    const {
        setFieldValue,
        handleSubmit,
        users,
        fetchUsers
    } = props

    const Plus = (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="8" y1="4.37113e-08" x2="8" y2="15" stroke="#10AC84" strokeWidth="2"/>
            <line x1="15" y1="8" x2="-8.74228e-08" y2="8" stroke="#10AC84" strokeWidth="2"/>
        </svg>
    )

    const [visible, setVisible] = useState(false)
    const [value, setValue ] = useState('')
    
    
    const [storeTask, setTask] = useState(
        {
            items: []
        } 
    )

    let tasksLength = storeTask.items.length
    
    let handleButtonClick = e => {
        setFieldValue('tasks', storeTask.items)
        setFieldValue('buttonName', e.target.dataset.name)
    }

    const editTask = (updatedTask) => {
        setTask({items: storeTask.items.map(item => {       
            if(item._id === updatedTask._id){
                return {...item, ...updatedTask}
            }else{
                return item
            }
        })})
    }

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
        let task = {
            _id: generateNumber(),
            text: '',
            status: 'todo',
            description: '',
            developer: '',
            cost: null,
            priority: null
        }
        if(e.key === "Enter" && (e.target.value.trim() !== "" || e.target.value.length.trim() !== 0)){

            task.text = e.target.value
            newItems = [...storeTask.items, task]
            setTask({items: newItems})
            setValue('')
        }
    }
    const deleteTask = (ref) => {
        const value = ref
        let filtred = storeTask.items.filter( item => item.text !== value)
        setTask({items: filtred})
    }

    const tasksSet = storeTask.items.map( (item,index) => {
        if(item.text !== ''){
            return <Task 
                        key={item.text} 
                        users={users} 
                        fetchUsers={fetchUsers} 
                        type='backlog-task' 
                        editTask={editTask} 
                        task={item} 
                        handleDelete={deleteTask}
                        style={(tasksLength > 1 && index < tasksLength - 1) ? {borderBottom: '1px solid #597dff'} : {}}
                    />
        } 
    })


    return (
       <div className="create-block create-tasks-block">
            <h3>Бэклог</h3>
            <div className='create-task-wrapper'>
                <span className='description'>Добавление задач в бэклог</span>
                <Form onSubmit={handleSubmit}>
                    <div className="tasks-wrapper">
                        <div className="tasks">
                            {tasksSet}
                        </div>
                        <div className="create-task">
                            <Link onClick={toggleVisible} to='#' className="create-task-link">{Plus}</Link>
                            <TextArea type='textarea' onChange={handleChange} keyAction={handleKeyPressed} value={value} classname={classnames('task-input', {visible}) } placeholder='Что нужно сделать?'/>
                        </div>
                    </div>
                    <div className="button-group">
                        <Button classname='cancle-button' typeButton='cancle' text='Отменить' handleClick={handleButtonClick} dataName='cancle'/>
                        <Button classname='confirm-button' typeButton='ok' text='Далее' handleClick={handleButtonClick} dataName='create'/>
                    </div>
                </Form>
            </div>
       </div>
    );
};

export default TaskForm;