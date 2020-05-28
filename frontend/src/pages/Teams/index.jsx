import React, { useState } from 'react';

import {Content, Button, Modal} from 'components'

import {Teams, CreateTeamForm} from 'modules'

import './style.scss'

const TeamsPage = () => {

    const [visible, setModalVisible] = useState(false)

    const onButtonClick = () => setModalVisible(!visible)
    const handleCancel = () => setModalVisible(false)

    return (
        <Content  type='create-block' classname="teams-page">
            <div className="teams-row">
                <h3>Команды</h3>
                <Button handleClick={onButtonClick} classname='login-form__button' text='Добавить команду'></Button>
                <Modal 
                    onCancel={handleCancel} 
                    handleCancel={handleCancel} 
                    footer={null} 
                    visible={visible} 
                    title="Создание команды" 
                    centered
                    destroyOnClose 
                >
                    <CreateTeamForm setModalVisible={setModalVisible}/>
                </Modal>
            </div>
            <div className="teams">
                <Teams />
            </div>

        </Content>
    );
};

export default TeamsPage;