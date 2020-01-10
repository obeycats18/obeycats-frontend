import React, { useState } from 'react'
import {Link} from 'react-router-dom'

import 'components/Auth/style.scss'

import {
    Block,
    Button,
    Item,
    Form,
    Checkbox,
    ErrorMessage
} from 'components/common';


export const LoginForm = props => {

    let [selected, setSelected] = useState(true);

    let checkHandleChange = (e) => {
        setSelected(!e.target.checked);
        setFieldValue('rememberMe', selected);
    }

    
    const{
        setFieldValue,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        values
    } = props;

    return (
        <div className="login">
            <h3 className='login-title'>Войти в аккаунт</h3>
            <Block classname='login-block' >
                <Form onSubmit={handleSubmit} classname='login-form'>
                    <Item 
                        value={values.email}
                        type='email' 
                        name='email' 
                        classname='login-form__input' 
                        placeholder='E-mail'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        validateStatus={ 
                            !touched.email 
                                ? '' 
                                : errors.email ? 'error' : 'success'
                                
                        }
                    > {
                        !touched.email 
                        ? '' 
                        : errors.email ? <ErrorMessage text={errors.email}/> : ''  
                    } </Item>
                    <Item 
                        value={values.password}
                        type='password' 
                        name='password' 
                        classname='login-form__input' 
                        placeholder='Пароль'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        validateStatus={ 
                            !touched.password 
                                ? '' 
                                : errors.password ? 'error' : 'success'
                                
                        }
                    >{
                        !touched.password 
                        ? '' 
                        : errors.password ? <ErrorMessage text={errors.password }/> : ''  
                    } </Item>
                    <div className="login-form__button-group">
                        <Checkbox name='rememberMe' text='Запомнить меня' handleChange={checkHandleChange}/>
                        <Link to='/forgive' className='forgive'>Забыли пароль?</Link>
                    </div>
                    <Button type='submit'  isSubmitting={isSubmitting} text='Войти' classname='login-form__button'/>
                    <Link to='/registration' className='registration-link'>Зарегистрироваться</Link>
                </Form>
            </Block>
        </div>
    )
}