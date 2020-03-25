import React from 'react';

import './style.scss'

const EditPriority = props => {

    const{
        handleUpdate
    } = props

    const handleClick = e => {
        handleUpdate({priority: parseInt(e.target.dataset.value)})

        Array.prototype.slice.call(e.target.parentNode.children).forEach(item => {
            if(item === e.target){
                item.classList.toggle(`priority-active`)
            }else{
                if(item.classList.contains('priority-active')){
                    item.classList.remove('priority-active')
                }
            }
        })

        // e.target.classList.toggle()
    }

    return (
        <div className="edit-priority">
            <div className="description-section">
                <p>Приоритет</p>
            </div>
            
            <div className="priority-wrapper">
                <div onClick={handleClick} data-value={1} data-name={'green'} className="priority-block green"></div>
                <div onClick={handleClick} data-value={2} data-name={'yellow'} className="priority-block yellow"></div>
                <div onClick={handleClick} data-value={3} data-name={'red'} className="priority-block red"></div>
            </div>

        </div>
    );
};

export default EditPriority;