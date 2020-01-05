import React from 'react';

import {Task, Item} from 'components/common'

import {DatePicker, Checkbox, Icon, Empty} from 'antd'
import {Link} from 'react-router-dom'

import classnames from 'classnames'

import './style.scss'
import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const Sprint = props => {

    const {
        users,
        fetchUsers
    } = props

    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState('')
    const [sprints, setSprint] = useState({
        items: [ ]
    })

    // const [tasks, setTasks] = useState({})

    const editTask = (updatedTask) => {
        let newSprints = [] 
        sprints.items.forEach(sprint => {
            newSprints.push({
                ...sprint,
                tasks: sprint.tasks.map(task => {
                    if(task._id === updatedTask._id){                    
                        return ({...task, ...updatedTask})
                    }else{
                        return (task)
                    }
                })
            })
        })
        
        setSprint({items: newSprints})
        
    }

    const handleClick = () => {
        setVisible(!visible)
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    const generateNumber = () => {
        let number = Math.ceil(Math.random() * 100);

        if(number !== Math.ceil(Math.random() * 100)){
            return number
        } else{
            number = Math.ceil(Math.random() * 100)
            return number 
        }    
    }

    const handleEnterKey = e => {
        if(e.key === "Enter" && (e.target.value.trim() !== "" || e.target.value.length.trim() !== 0)){

            let sprint = {
                _id: generateNumber(),
                title: '',
                tasks: []
            }

            sprint.title = e.target.value
            setSprint({items: [...sprints.items, sprint]})
            setValue('')
        }
    }

    const renderSprint = () => {
        if(sprints.items.length > 0){
            return sprints.items.map(sprint => {
                let tasksLength = sprint.tasks.length
                return (
                    <div key={sprint.title} className='sprint-block'>
                        <div className="sprint-title">
                            <p>{sprint.title}</p>
                        </div>
                        <div className="sprint-content">
                            <Droppable key={sprint._id} droppableId={`${sprint.title}`}>
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.droppableProps} className="sprint-tasks">
                                        {sprint.tasks.map((task, index) => {
                                            return (
                                                <Draggable key={task._id} draggableId={`${task._id}`} index={index}>
                                                    {(provided) => (
                                                        <div
                                                            className='draggble-item'
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                        >
                                                            <Task editTask={editTask} users={users} fetchUsers={fetchUsers} key={task._id} task={task} style={(tasksLength > 1 && index < tasksLength - 1) ? {borderBottom: '1px solid rgba(70, 110, 255, 0.1)'} : {}} type='sprint-task'/>
                                                        </div>
                                                    )} 
                                                </Draggable>
                                            )
                                        })}
                                    {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        {/* <div className="sprint-info">
                            <p className='subtitle'>Доп. информация</p>
                            <DatePicker 
                                allowClear={false}
                                className='date-picker sprint-date-picker'
                                placeholder='Дата deadline'
                                // onChange={handleDateChange}
                            />
                            <Checkbox>Точка не возразата</Checkbox>
                        </div> */}
                    </div>
                </div>
                )
            })    
        }else{
            return (
                <div className='sprint-empty'>
                    <Empty description={'Создайте свой первый спринт'} />
                </div>
            )
        }
        
    }

    return (
        <div className='sprint-wrapper'>
            {renderSprint()}
            <div className="create-sprint">
                <Link onClick={handleClick} to='#' className="create-sprint-link">Создать спринт<Icon style={{marginLeft: 15 }} type="plus" /></Link>
                <Item 
                    type='text' 
                    classname={classnames('popup-create-form-input sprint-input', {visible})} 
                    placeholder='Название спринта'
                    keyAction={handleEnterKey}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default Sprint;