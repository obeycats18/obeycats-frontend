import React from 'react';

import {Link} from 'react-router-dom'

import CheckIcon from 'assets/CheckIcon.svg'

import {Block} from 'components/common'

import './style.scss'

const Success = () => {
    return (
        <Block>
            <div className="registration-success">
                <div className="registration-success-icon">
                    <img src={CheckIcon} alt="Check Icon"/>
                </div>
                <div className="registration-success-text">
                    <h3>Регистрация прошла успешно!</h3>
                </div>
                <div className="registration-success-button">
                    <Link to='/login' className='link-login'> Войти в аккаунт</Link>
                </div>
            </div>
        </Block>
    );
};

export default Success;