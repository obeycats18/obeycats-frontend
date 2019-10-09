import React from 'react'
import { withFormik } from 'formik';
import {Link} from 'react-router-dom'

import 'components/Auth/style.scss'

import Form from '../../common/Form';
import Item from '../../common/Item';
import Button from '../../common/Button';
import Block from '../../common/Block';
import Checkbox from '../../common/Checkbox';

const LoginForm = props => {

    const{
        values,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    return (
        <div className="login">
            <h3 className='login-title'>Войти в аккаунт</h3>
            <Block classname='login-block' >
                <Form handleSubmit={handleSubmit} classname='login-form'>
                    <Item 
                        type='email' 
                        name='email' 
                        classname='login-form__input' 
                        placeholder='E-mail'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.email}
                    />
                    <Item 
                        type='password' 
                        name='password' 
                        classname='login-form__input' 
                        placeholder='Пароль'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.password}
                    />
                    <div className="login-form__button-group">
                        <Checkbox text='Запомнить меня'/>
                        <Link to='/forgive' className='forgive'>Забыли пароль?</Link>
                    </div>
                    <Button type='submit' text='Войти' classname='login-form__button'/>
                    <Link to='/registration' className='registration'>Зарегистрироваться</Link>
                </Form>
            </Block>
        </div>
    )
}

const Login = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),

    handleSubmit: (value, {setSubmitting}) => {
        console.log(value);
        setSubmitting(false);
    }
})(LoginForm)

export default Login;