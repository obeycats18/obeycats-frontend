import React from 'react';

import {DragDropContext, Droppable} from 'react-beautiful-dnd'

import {Content} from 'components/common'

import Board from './Board'

import './style.scss'

const Boards = props => {

    const boards = [
        {
            _id: 1,
            name: "ToDO", 
            tasks: [
                {
                    _id: 1.1, 
                    text: "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В", 
                    priority: '3', 
                    storypoints: "40"
                }, 
                {
                    _id: 1.2,
                    text: "Task2", 
                    priority: '2', 
                    storypoints: "40"
                }
            ]
        },
        {
            _id: 2,
            name: "In Progress", 
            tasks: [
                {
                    _id: 2.1,
                    text: "Task1", 
                    priority: '3', 
                    storypoints: "40"
                },
                {
                    _id: 2.2,
                    text: "Task2", 
                    priority: '2', 
                    storypoints: "40"
                }
            ]
        },
        {
            _id: 3,
            name: "ToDO", 
            tasks: [
                {
                    _id: 3.1,
                    text: "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В", 
                    priority: '3', 
                    storypoints: "40"
                },
                {
                    _id: 3.2,
                    text: "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В", 
                    priority: '3', 
                    storypoints: "40"
                },
                {
                    _id: 3.3,
                    text: "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В", 
                    priority: '3', 
                    storypoints: "40"
                }, 
                {
                    _id: 3.4,
                    text: "Task2", 
                    priority: '2', 
                    storypoints: "40"
                }
            ]
        },
        {
            _id: 4,
            name: "In Progress", 
            tasks: [
                {
                    _id: 4.1,
                    text: "Task1", 
                    priority: '3', 
                    storypoints: "40"
                }, 
                {
                    _id: 4.2,
                    text: "Task2", 
                    priority: '2', 
                    storypoints: "40"
                }
            ]
        },
        {
            _id: 5,
            name: "In Progress", 
            tasks: [
                {
                    _id: 5.1,
                    text: "Task1", 
                    priority: '3', 
                    storypoints: "40"
                }, 
                {
                    _id: 5.2,
                    text: "Task2", 
                    priority: '2', 
                    storypoints: "40"
                }
            ]
        },
    ]

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
    }


    const getItems = (index) => {
        
        let items = []

        boards.forEach(item => {
            if(`${item._id}` === index) {
                items = [...item.tasks]
            }
        })

        return items
    }

    const onDragEnd = (result) => {
        const {source, destination} = result

        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                getItems(source.droppableId),
                source.index,
                destination.index
            );

            console.log(items)
        } else {
        }

    }

    return (
        <Content type='create-block'>
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
    );
};

export default Boards;