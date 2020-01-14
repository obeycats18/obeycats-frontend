import React, { useState, useEffect } from 'react';

import Sprint from './Sprint'
import Backlog from './Backlog'

import { DragDropContext } from 'react-beautiful-dnd';

const SprintContext = props => {

    const {
        users,
        fetchUsers,
        tasks,
        sprints,
        addSprints,
        idProject,
        idTask,
        editSprints,
        changeSprint,
        changeTask,
        setTasks,
        fetchSprints
    } = props
    

    useEffect( () => {
        setTasks(idProject)
        fetchSprints(idProject)
    }, [tasks.length, sprints.length])

    const [submmiting, setSubmitting] = useState(false)

    const reorderBackog = (source, destination) => {

        let result = []     
        result = Array.from(tasks);
        const [removed] = result.splice(source.index, 1);
        result.splice(destination.index, 0, removed);
        changeTask([...result])

    };

    const reorderSprint = (source, destination) => {

        let result = []
        let newSprint = [] 
        sprints.forEach(sprint => {
            if(destination.droppableId === sprint._id){
                sprint.tasks.forEach(task => result.push(task))
            }
        })
        const [removed] = result.splice(source.index, 1);
        result.splice(destination.index, 0, removed);

        sprints.forEach(sprint => {
            if(destination.droppableId === sprint._id){
                newSprint.push({
                    ...sprint,
                    tasks: [...result]
                })
            }else{
                newSprint.push(sprint)
            }
        })

        changeSprint([...newSprint])
    }

    const move = (list, source, destination) => {

        let tempList = (list.tasks !== undefined) ? list.tasks : list 
        setSubmitting(true)
        editSprints({idProject, idSource: source.droppableId,idDestination: destination.droppableId, tasks: tempList[source.index]})
            .then(() => setSubmitting(false))
    
    }
    
    const handleDragEnd = (result) => {
        const {source, destination} = result
        if(!destination) return 
        if(source.droppableId !== destination.droppableId){
            if(source.droppableId === idTask) move(tasks, source, destination)
            else{
                sprints.forEach(sprint => {
                    if(sprint._id === source.droppableId) move(sprint, source, destination)
                })
            }
        }
        if(source.droppableId === destination.droppableId) {
            if(source.droppableId === idTask) reorderBackog(source, destination)
            else reorderSprint(source, destination)
        }   
    }
    
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="dnd-sprint-context">
                <Sprint
                    idProject={idProject}
                    addSprints={addSprints} 
                    storeSprints={sprints} 
                    users={users} 
                    fetchUsers={fetchUsers}
                    submmit={submmiting}
                />
            </div>
            <div className="dnd-bakclog-context">
                <Backlog 
                    backlog={tasks} 
                    users={users} 
                    fetchUsers={fetchUsers}
                    idTask={idTask}
                    submmit={submmiting}
                />
            </div>
        </DragDropContext>
    );
};

export default SprintContext;