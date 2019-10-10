import React from 'react'
import {Link} from 'react-router-dom'

import 'components/Auth/style.scss'

import Form from '../../common/Form';
import Item from '../../common/Item';
import Button from '../../common/Button';
import Block from '../../common/Block';
import Checkbox from '../../common/Checkbox';

export const LoginForm = props => {

    const{
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
    } = props;

    return (
        <div className="login">
            <h3 className='login-title'>Войти в аккаунт</h3>
            <Block classname='login-block' >
                <Form onSubmit={handleSubmit} classname='login-form'>
                    <Item 
                        type='email' 
                        name='email' 
                        classname='login-form__input' 
                        placeholder='E-mail'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Item 
                        type='password' 
                        name='password' 
                        classname='login-form__input' 
                        placeholder='Пароль'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <div className="login-form__button-group">
                        <Checkbox text='Запомнить меня'/>
                        <Link to='/forgive' className='forgive'>Забыли пароль?</Link>
                    </div>
                    <Button type='submit' onClick={handleSubmit} isSubmitting={isSubmitting} text='Войти' classname='login-form__button'/>
                    <Link to='/registration' className='registration-link'>Зарегистрироваться</Link>
                </Form>
            </Block>
        </div>
    )
}