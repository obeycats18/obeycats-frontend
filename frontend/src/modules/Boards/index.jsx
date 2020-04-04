import React from 'react';

import {DragDropContext} from 'react-beautiful-dnd'

import {Content, Board} from 'components'

import {reorder} from 'helpers/dnd'

import {reorderTaskInBoard} from 'redux/reducers/boards'

import './style.scss'

const Boards = props => {

    const {boards, replaceTask, idProject} = props


    const getTasks = (idBoard) => {
        
        let tasks = []

        boards.forEach(board => {
            if(board._id.toString() === idBoard) {
                tasks = [...board.tasks]
            }
        })

        return tasks
    }

    const onDragEnd = (result) => {
        const {source, destination} = result

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            reorderTaskInBoard(source.droppableId, reorder(getTasks(source.droppableId), source, destination ) )
        } else{
            replaceTask({idProject, idDestination: destination.droppableId, idSource: source.droppableId, task: getTasks(source.droppableId)[source.index] })
        }

    }

    return (
        (boards.length)
            ? <Content type='create-block'>
                <h3>Доски</h3>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="boards-wrapper">
                        {
                            boards.map((board,index) => (
                                <Board key={board._id} board={board} index={index}/>
                            ))
                        }
                    </div>
                </DragDropContext>
            </Content>
            : <Content type='empty' emptyText='Досок не существует'/>
    );
};

export default Boards;