import React, { useState } from 'react';

import {Link} from 'react-router-dom'
import {Icon, Modal} from 'antd'

import './style.scss'
import PopupCreate from '../PopupCreate'

import CloseIcon from 'assets/project-item/Close_Icon.svg'

const CreateProject = () => {

    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true)
    }

    const handleOk = e => {
        e.preventDefault()
        setVisible(false)
    }

    const handleCancle = e => {
        e.preventDefault()
        setVisible(false)
    }

    return (
        <div className='create-project'>
            <div className='button-create'>
                <Link onClick={showModal} to='#' className='button-create-link'><Icon type="plus" /></Link>
            </div>

            <Modal
                visible={visible}
                className='popup-ant'
                footer={null}
                onCancel={handleCancle}
                onOk={handleOk}
                closeIcon={<img src={CloseIcon} alt='Close Button'/>}
            >
                <PopupCreate ok={handleOk} cancle={handleCancle}/>
            </Modal>
        </div>
    );
};

export default CreateProject;