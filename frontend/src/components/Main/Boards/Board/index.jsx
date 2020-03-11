import React from 'react';

import {Scrollbars} from 'react-custom-scrollbars'
import {Droppable, Draggable} from 'react-beautiful-dnd'

import Task from '../BoardTask'

import './style.scss'

const Boards = props => {

    console.log(props)

    const {
        name,
        tasks,
        index,
        _id
    } = props.board

    return (
        <div className="board">
            <span className="board-name">{name}</span>
            <Droppable droppableId={`${_id}`} >
                {(provider, snaphot) => (
                    <div
                        ref={provider.innerRef}
                        {...provider.droppableProps} 
                        className="tasks-wrapper"
                    >
                        <Scrollbars  style={{ height: 500 }} autoHideTimeout={500} autoHide>
                        {
                            tasks.map((task, index) => (
                                <Draggable key={task._id} index={index} draggableId={`${task._id}`}>
                                    {(provider, snaphot) => (
                                        <div ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
                                            <Task key={task._id} task={task}/>
                                        </div>
                                    )}
                                </Draggable>
                            ))
                        }
                        </Scrollbars>
                        {provider.placeholder}
                    </div>
                )}
            </Droppable>
            
        </div>
    );
};

export default Boards;