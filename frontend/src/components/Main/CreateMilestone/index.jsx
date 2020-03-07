import React from 'react';

import {Content} from 'components/common'

import SprintContext from './SprintContext/container';

const CreateMilestone = props => {
    return (
        <Content type='create-block' clasname="create-milestone-block">
            <h3 className='block-title'>Добавление этапов</h3>
            <div className='create-milestone-wrapper'>
                <SprintContext {...props}/>
            </div>
       </Content>
    );
};

export default CreateMilestone;