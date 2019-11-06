import React, {useState} from 'react';

import './style.scss'

import CheckIcon from 'assets/CheckIcon.svg'


const PopupCreateSuccess = () => {

    return (
        <div className='popup-create-success'>
            <div className="popup-create-success-block">
                <img src={CheckIcon} alt="Check Icon"/>
            </div>
            <div className="popup-create-success-text">
                <h3>Проект успешно создан!</h3>
            </div>
        </div>
    );
};

export default PopupCreateSuccess;