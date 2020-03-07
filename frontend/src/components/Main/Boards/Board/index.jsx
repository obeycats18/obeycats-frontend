import React from 'react';

import {Scrollbars} from 'react-custom-scrollbars'

import Task from '../BoardTask'

import './style.scss'

const Boards = props => {

    console.log(props)

    const {
        name,
        tasks
    } = props.board

    return (
       
            <div className="board">
                <span className="board-name">{name}</span>
                
                <div className="tasks-wrapper">
                    <Scrollbars  style={{ height: 500 }} autoHideTimeout={500} autoHide>
                    {
                        tasks.map(task => <Task key={task.name} task={task}/>)
                    }
                     </Scrollbars>
                </div>
                
            </div>
       
    );
};

export default Boards;