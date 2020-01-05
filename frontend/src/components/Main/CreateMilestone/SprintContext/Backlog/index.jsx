import React from 'react';

import {Task} from 'components/common'

import { Draggable, Droppable } from 'react-beautiful-dnd';


import './style.scss'

const Backlog = props => {

    const {
        tasks,
        users,
        fetchUsers
    } = props

    let tasksLength = tasks.length

    return (
        <div className='backlog-wrapper'>
            <h3 className='backlog-title'>Бэклог</h3>
            
            <div className="dnd-backlog-droppable">
                <Droppable droppableId='backlog'>
                    {provided => (
                        <div 
                            ref={provided.innerRef} 
                            {...provided.droppableProps} 
                            className="tasks"
                        >
                            {tasks.map((item, index) => {
                                return (
                                    <Draggable key={item._id} draggableId={item._id} index={index}>
                                        {(provided) => (
                                            <div
                                                className='draggble-item'
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <Task users={users} fetchUsers={fetchUsers} key={item._id} task={item} style={tasksLength > 1 ? {borderBottom: '1px solid  #597dff'} : {}}  type='backlog-task'/>
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
    );
};

export default Backlog;