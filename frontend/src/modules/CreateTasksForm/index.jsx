import React, {useState} from 'react';
import classnames from 'classnames'

import {Link} from 'react-router-dom'
import {TextArea, Button, Form, Task} from 'components';

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
    const [value, setValue] = useState('')
    
    const [tasks, setTask] = useState([])

    let tasksLength = tasks.length
    
    let handleButtonClick = e => {
        setFieldValue('tasks', tasks)
        setFieldValue('buttonName', e.target.dataset.name)
    }

    const editTask = (updatedTask) => {
        setTask(tasks.map(item => {       
            if(item._id === updatedTask._id){
                return {...item, ...updatedTask}
            }else{
                return item
            }
        }))
    }

    const toggleVisible = () => {
        if(!tasks.length){
            setVisible(true)
        }
        setVisible(!visible)
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    const handleKeyPressed = e => {
        let task = {
            _id: new Date().getUTCMilliseconds().toString(),
            text: '',
            cost: 0,
            priority: 1,
            status: '',
            description: '',
            developer: ''
        }
        if(e.key === "Enter" && (e.target.value.trim() !== "" || e.target.value.length.trim() !== 0)){
            e.preventDefault();
            task.text = e.target.value
            setTask([...tasks, task])
            setValue('')
        }
    }
    const deleteTask = (ref) => {
        const value = ref
        let filtred = tasks.filter( task => task.text !== value)
        setTask(filtred)
    }

    const renderTasks = tasks.map( (task,index) => {
        if(task.text !== ''){
            return <Task 
                        key={task._id} 
                        users={users} 
                        fetchUsers={fetchUsers} 
                        type='backlog-task' 
                        editTask={editTask} 
                        task={task} 
                        handleDelete={deleteTask}
                        style={(tasksLength > 1 && index < tasksLength - 1) ? {borderBottom: '1px solid #597dff'} : {}}
                    />
        } 
        return ""
    })


    return (
        <Form onSubmit={handleSubmit}>
            <div className="tasks-wrapper">
                <div className="tasks">
                    {renderTasks}
                </div>
                <div className="create-task">
                    <Link onClick={toggleVisible} to='#' className="create-task-link">{Plus}</Link>
                    <TextArea 
                        type='textarea' 
                        onChange={handleChange} 
                        keyAction={handleKeyPressed} 
                        value={value} 
                        classname={classnames('task-input', {visible}) } 
                        placeholder='Что нужно сделать?'/>
                </div>
            </div>
            <div className="button-group">
                <Button classname='cancle-button' typeButton='cancle' text='Отменить' handleClick={handleButtonClick} dataName='cancle'/>
                <Button classname='confirm-button' typeButton='ok' text='Далее' handleClick={handleButtonClick} dataName='create'/>
            </div>
        </Form>
    );
};

export default TaskForm;