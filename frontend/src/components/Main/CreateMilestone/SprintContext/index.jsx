import React from 'react';

import Sprint from './Sprint'
import Backlog from './Backlog/container'

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const SprintContext = props => {

    const {
        users,
        fetchUsers
    } = props

    const handleDragEnd = result => {
        console.log(result)
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="dnd-sprint-context">
                <Sprint users={users} fetchUsers={fetchUsers}/>
            </div>
            <div className="dnd-bakclog-context">
                <Backlog users={users} fetchUsers={fetchUsers}/>
            </div>
        </DragDropContext>
    );
};

export default SprintContext;