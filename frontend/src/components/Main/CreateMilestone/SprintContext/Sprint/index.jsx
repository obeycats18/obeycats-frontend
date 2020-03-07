import React from 'react';

import {Task, Item, Button} from 'components/common'

import {Icon, Empty, Spin} from 'antd'
import {Link} from 'react-router-dom'

import classnames from 'classnames'

import { useState } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { useEffect } from 'react';
import './style.scss'

const Sprint = props => {

    const {
        users,
        fetchUsers,
        storeSprints,
        createSprint,
        idProject,
        addSprints,
        submmit
    } = props

    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState('')
    const [isSubmmit, setSubmitting] = useState(false)
    const [sprints, setSprint] = useState({
        items: []
    })
    useEffect( () => {
        
        if(storeSprints !== undefined && storeSprints !== null) {
            if(storeSprints.length > 0) {
                setSprint({items: [...storeSprints]})
            }
            setSprint({items: storeSprints || [] })
        
        }
    }, [storeSprints])

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

        createSprint(newSprints)
    }

    const handleClick = () => {
        setVisible(!visible)
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    const createSprintButton = e => {

        let sprint = {
            name: '',
            tasks: []
        }
        sprint.name = value
        
        setSubmitting(true)
        addSprints({idProject: idProject, ...sprint}).then(() => {
            setSubmitting(false)
        })
        setValue('')
    }

    const renderSprint = () => {
        if(sprints.items !== null && sprints.items.length > 0){
            return sprints.items.map(sprint => {
                let tasksLength = sprint.tasks.length
                return (
                    <div key={sprint._id} className='sprint-block'>
                        <div className="sprint-title">
                            <p>{sprint.name}</p>
                        </div>
                        <div className="sprint-content">
                            <Droppable key={sprint._id} droppableId={`${sprint._id}`}>
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
            {
                (isSubmmit)
                    ? <div className='spin-block' style={{marginTop: 20}}><Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}/></div>
                    : ''
            }
            
            <div className="create-sprint">
                <Link onClick={handleClick} to='#' className="create-sprint-link">Создать спринт<Icon style={{marginLeft: 15 }} type="plus" /></Link>
                <div className={classnames("sprint-input-block", {visible})}>
                    <Item 
                        type='text' 
                        classname={classnames('popup-create-form-input sprint-input')} 
                        placeholder='Название спринта'
                        // keyAction={handleEnterKey}
                        value={value}
                        onChange={handleChange}
                    />
                    <div className="button-group">
                        <Button classname='confirm-button' type="button" typeButton='ok' text='Создать' handleClick={createSprintButton}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sprint;