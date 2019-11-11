import React, { useState } from 'react';

import {Link} from 'react-router-dom'
import {Icon, Modal} from 'antd'

import './style.scss'
import PopupCreate from '../PopupCreate'

import CloseIcon from 'assets/project-item/Close_Icon.svg'

const CreateProject = () => {

    const [visible, setVisible] = useState(false);

    const showModal = isVisible => {
        setVisible(isVisible)
    }

    const handleOk = e => {
        e.preventDefault()
        setVisible(false)
    }

    const handleCancle = e => {
        e.preventDefault()
        setVisible(false)
    }

    const [idModal, setId] = useState(1);

    const switchModal = (id) => {
        setId(id);
    }

    return (
        <div className='create-project'>
            <div className='button-create'>
                <Link onClick={() => {showModal(true)}} to='#' className='button-create-link'><Icon type="plus" /></Link>
            </div>

            <Modal
                visible={visible}
                className='popup-ant'
                footer={null}
                onCancel={handleCancle}
                onOk={handleOk}
                closeIcon={<img src={CloseIcon} alt='Close Button'/>}
            >
                <PopupCreate switchModal={switchModal} idModal={idModal} showModal={showModal} />
            </Modal>
        </div>
    );
};

export default CreateProject;