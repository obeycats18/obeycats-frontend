import React, { useEffect, useState} from 'react';

import {Task, Input, Button} from 'components'

import {Icon, Empty, Spin} from 'antd'
import {Link} from 'react-router-dom'

import classnames from 'classnames'

import { Draggable, Droppable } from 'react-beautiful-dnd';
import './style.scss'

const Sprint = props => {

    const {
        users,
        fetchUsers,
        sprints,
        idProject,
        addSprints
    } = props
    const [visible, setVisible] = useState(false)
    const [value, setValue] = useState('')
    // }

    const handleClick = () => {
        setVisible(!visible)
    }

    const handleChange = e => {
        setValue(e.target.value)
    }

    const createSprintButton = e => {
        
        addSprints({idProject: idProject, ...{
            name: value,
            tasks: []
        }})
        setValue('')
    }

    const renderSprint = () => {
        if(sprints){
            return sprints.map(sprint => {
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
                                                            <Task  users={users} fetchUsers={fetchUsers} key={task._id} task={task} style={(tasksLength > 1 && index < tasksLength - 1) ? {borderBottom: '1px solid rgba(70, 110, 255, 0.1)'} : {}} type='sprint-task'/>
          
                                                        </div>
                                                    )} 
                                                </Draggable>
                                            )
                                        })}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
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
                <div className={classnames("sprint-input-block", {visible})}>
                    <Input 
                        type='text' 
                        classname={classnames('popup-create-form-input sprint-input')} 
                        placeholder='Название спринта'
                        // keyAction={handleEnterKey}
                        value={value}
                        handleChange={handleChange}
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