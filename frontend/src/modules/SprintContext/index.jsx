import React, {useEffect} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import {Sprint, Backlog} from 'components'

import {Spin, Icon} from 'antd'

import {Button, Form} from 'components';

import {reorder} from 'helpers/dnd'

const SprintContext = props => {

    const {
        users,
        fetchUsers,
        backlog,
        sprints,
        addSprints,
        idProject,
        idTask,
        editSprints,
        changeSprint,
        changeTask,
        isTasksFetching,
        handleSubmit
    } = props
    
   
    const move = (list, source, destination) => (
        editSprints(
            {
                idProject, 
                idSource: source.droppableId,
                idDestination: destination.droppableId, 
                tasks: list[source.index]
            }
        )
    )
    
    const handleDragEnd = (result) => {
        const {source, destination} = result

        const [currentSprint] = sprints.filter(sprint => sprint._id === source.droppableId)

        if(!destination) return 

        if(source.droppableId !== destination.droppableId){
            if(source.droppableId === idTask) move(backlog, source, destination)
            else move(currentSprint.tasks, source, destination)
        }
        if(source.droppableId === destination.droppableId) {

            if(source.droppableId === idTask) changeTask(reorder(backlog, source, destination))
            else changeSprint(source.droppableId, reorder(currentSprint.tasks, source, destination))

        }   
    }
     {/* TODO Показать загрузку когда идет запрос */}
    return (
        <Form onSubmit={handleSubmit}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <div className="dnd-sprint-context">
                   
                    <Sprint
                        idProject={idProject}
                        addSprints={addSprints} 
                        sprints={sprints} 
                        users={users} 
                        fetchUsers={fetchUsers}
                        changeTask={changeTask}
                    />
                </div>

                {
                    isTasksFetching
                        ? <div className='spin-block' style={{marginTop: 20}}><Spin indicator={<Icon type="loading" style={{ fontSize: 24 }} spin />}/></div>                        
                        :<Backlog 
                            backlog={backlog} 
                            users={users} 
                            fetchUsers={fetchUsers}
                            idTask={idTask}
                        />
                }
                
            </DragDropContext>
            <div className="button-group">
                <Button classname='confirm-button'  typeButton='ok' text='Завершить' dataName='create'/>
            </div>
        </Form>
    );
};

export default SprintContext;