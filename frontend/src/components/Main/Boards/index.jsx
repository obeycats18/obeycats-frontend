import React from 'react';

import {Content} from 'components/common'

import Board from './Board'

import './style.scss'

const Boards = props => {

    const boards = [
        {
            name: "ToDO", 
            tasks: [{text: "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В", priority: '3', storypoints: "40"}, {text: "Task2", priority: '2', storypoints: "40"}]
        },
        {
            name: "In Progress", 
            tasks: [{text: "Task1", priority: '3', storypoints: "40"}, {text: "Task2", priority: '2', storypoints: "40"}]
        },
        {
            name: "ToDO", 
            tasks: [{text: "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В", priority: '3', storypoints: "40"},{text: "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В", priority: '3', storypoints: "40"},{text: "Lorem Ipsum - это текст-, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной для текстов на латинице с начала XVI века. В", priority: '3', storypoints: "40"},  {text: "Task2", priority: '2', storypoints: "40"}]
        },
        {
            name: "In Progress", 
            tasks: [{text: "Task1", priority: '3', storypoints: "40"}, {text: "Task2", priority: '2', storypoints: "40"}]
        },
        {
            name: "In Progress", 
            tasks: [{text: "Task1", priority: '3', storypoints: "40"}, {text: "Task2", priority: '2', storypoints: "40"}]
        },
    ]

    return (
        <Content type='create-block'>
            <h3>Доски</h3>
            <div className="boards-wrapper">
                {boards.map(board => <Board key={board.name} board={board}/>)}
            </div>
        </Content>
    );
};

export default Boards;