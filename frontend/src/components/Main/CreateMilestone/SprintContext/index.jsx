import React from 'react';

import Sprint from './Sprint'
import Backlog from './Backlog'

import { DragDropContext } from 'react-beautiful-dnd';
import { useEffect } from 'react';
import { useState } from 'react';

const SprintContext = props => {

    const {
        users,
        fetchUsers,
        tasks,
        sprints,
        addSprints,
        idProject
    } = props
    
    useEffect( () => {
        setData({sprints: sprints, backlog: tasks})
    }, [tasks, sprints])

    const [store, setData] = useState({
        sprints: [],
        backlog: []
    })

    const createSprint = sprint => {
        
        if(!store.sprints) {
            setData({sprints: [sprint], backlog: [...store.backlog]})
        }else{
            setData({sprints: [...store.sprints, sprint], backlog: [...store.backlog]})
        }

    }


    const reorderBackog = (source, destination) => {

        let result = [] 
       
        result = Array.from(store.backlog);
        const [removed] = result.splice(source.index, 1);
        result.splice(destination.index, 0, removed);
        setData({sprints: store.sprints, backlog: [...result]})

    };

    const reorderSprint = (source, destination) => {

        let result = []
        let newSprint = [] 
        store.sprints.forEach(sprint => {
            if(destination.droppableId === sprint.name){
                sprint.tasks.forEach(task => result.push(task))
            }
        })
        const [removed] = result.splice(source.index, 1);
        result.splice(destination.index, 0, removed);

        store.sprints.forEach(sprint => {
            if(destination.droppableId === sprint.name){
                newSprint.push({
                    ...sprint,
                    tasks: [...result]
                })
            }else{
                newSprint.push(sprint)
            }
        })

        setData({sprints: [...newSprint], backlog: store.backlog})
    }

    const move = (list, source, destination) => {
        let tempList = (list.tasks !== undefined) ? list.tasks : list 

        let startList = tempList.map(item => item)
        let finishList = []
        store.sprints.forEach(sprint => {
            if(destination.droppableId === sprint.name){
                sprint.tasks.forEach(task => finishList.push(task))
            }
        })
        
        startList.splice(source.index, 1)
        finishList.splice(destination.index, 0, tempList[source.index])
        
        const newSprint = [] 
        store.sprints.forEach(sprint => {
            if(destination.droppableId === sprint.name){
                newSprint.push({
                    ...sprint,
                    tasks: [...finishList]
                })
            }else if( source.droppableId === sprint.name ){
                newSprint.push({
                    ...sprint,
                    tasks: [...startList]
                })
            }
            else{
                newSprint.push(sprint)
            }
        })

        if(list.tasks === undefined) {
            setData({sprints: [...newSprint], backlog: startList })
        }else {
            setData({sprints: [...newSprint], backlog: store.backlog })
        }  
    }
    
    const handleDragEnd = (result) => {
        const {source, destination} = result

        if(!destination) return 

        if(source.droppableId !== destination.droppableId){
            if(source.droppableId === 'backlog') move(store.backlog, source, destination)
            else{
                store.sprints.forEach(sprint => {
                    if(sprint.title === source.droppableId) move(sprint, source, destination)
                })
            }
        }
        
        if(source.droppableId === destination.droppableId) {
            if(source.droppableId === 'backlog') reorderBackog(source, destination)
            else reorderSprint(source, destination)
        }
    }
    
    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="dnd-sprint-context">
                <Sprint
                    idProject={idProject}
                    addSprint={addSprints} 
                    storeSprints={store.sprints} 
                    users={users} 
                    fetchUsers={fetchUsers}
                    createSprint={createSprint}
                />
            </div>
            <div className="dnd-bakclog-context">
                <Backlog backlog={store.backlog} users={users} fetchUsers={fetchUsers}/>
            </div>
        </DragDropContext>
    );
};

export default SprintContext;