import React from 'react';
import SprintContext from './SprintContext/container';

const CreateMilestone = props => {
    return (
        <div className="create-block create-milestone-block">
            <h3 className='block-title'>Добавление этапов</h3>
            <div className='create-milestone-wrapper'>
                <SprintContext {...props}/>
            </div>
       </div>
    );
};

export default CreateMilestone;