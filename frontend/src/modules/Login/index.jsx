import React from 'react'
import {Link} from 'react-router-dom'

import {
    Block,
    Button,
    Form
} from 'components';

import './style.scss'

export const Login = props => {

    const{
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        values
    } = props;

    const inputs = [
        {
            type: "email",
            name: "email",
            placeholder: "E-mail"
        },
        {
            type: "password",
            name: "password",
            placeholder: "Пароль"
        }
    ]

    return (
        <div className="login">
            <h3 className='login-title'>Войти в аккаунт</h3>
            <Block type='login'>
                <Form 
                    inputs={inputs}
                    values={values} 
                    errors={errors} 
                    touched={touched} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    onSubmit={handleSubmit} 
                    classname='login-form'>
                   
                    <Button type='submit' isSubmitting={isSubmitting} size='large' text='Войти'/>
                    <Link to='/registration' className='registration-link'>Зарегистрироваться</Link>
                </Form>
            </Block>
        </div>
    )
}