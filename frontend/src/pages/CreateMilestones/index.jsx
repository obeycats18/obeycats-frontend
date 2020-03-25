import React from 'react';

import {Content} from 'components'

import {CreateMilestonesForm} from 'modules';

const CreateMilestone = props => {
    return (
        <Content type='create-block' clasname="create-milestone-block">
            <h3 className='block-title'>Добавление этапов</h3>
            <div className='create-milestone-wrapper'>
                <CreateMilestonesForm/>
            </div>
       </Content>
    );
};

export default CreateMilestone;