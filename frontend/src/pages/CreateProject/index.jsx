import React from 'react';

import {
    Content
} from 'components'

import {CreateProjectForm} from 'modules'

import create from 'assets/illustrations/create.svg'

import './style.scss'

const CreateProjectPage = () => {
    return (
        <Content type='create' classname='create-page'>
            <h3>Cоздание проекта</h3>
            <div className="create-page__wrapper">
                <div className="create-page_left">
                    <span className='description'>Базовая информация о проекте</span>
                    <CreateProjectForm />
                </div>
                <div className="create-page_right">
                    <img src={create} alt=""/>
                </div>
            </div>
        </Content>
        
    );
};

export default CreateProjectPage;