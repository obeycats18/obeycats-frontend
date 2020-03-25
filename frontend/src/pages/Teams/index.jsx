import React from 'react';

import {Content, Button} from 'components'

import {Teams} from 'modules'

import './style.scss'

const TeamsPage = () => {

    return (
        <Content  type='create-block' classname="teams-page">
            <div className="teams-row">
                <h3>Команды</h3>
                <Button classname='login-form__button' text='Добавить команду'></Button>
            </div>
            <div className="teams">
                <Teams />
            </div>

        </Content>
    );
};

export default TeamsPage;