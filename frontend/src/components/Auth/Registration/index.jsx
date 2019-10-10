import React from 'react';
import { withFormik } from 'formik';
import {Link} from 'react-router-dom'
import Select from 'react-select';

import Form from '../../common/Form';
import Item from '../../common/Item';
import Button from '../../common/Button';
import Block from '../../common/Block';
import Checkbox from '../../common/Checkbox';

import 'components/Auth/style.scss'

const RegistrationForm = props => {
    const{
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const options = [
        { value: 'projectManager', label: 'Project Manager' },
        { value: 'teamLead', label: 'Team Lead' },
        { value: 'developer', label: 'Разработчик' },
        { value: 'clien', label: 'Клиент' },
    ];

    return (
        <div className="registration">
            <h3 className='registration-title'>Регистрация</h3>
            <Block classname='registration-block' >
                <Form onSubmit={handleSubmit} classname='registration-form'>
                    <Item 
                        type='text' 
                        name='last_name' 
                        classname='registration-form__input' 
                        placeholder='Имя'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Item 
                        type='text' 
                        name='first_name' 
                        classname='registration-form__input' 
                        placeholder='Фамилия'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Item 
                        type='email' 
                        name='email' 
                        classname='registration-form__input' 
                        placeholder='E-mail'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Item 
                        type='password' 
                        name='password' 
                        classname='registration-form__input' 
                        placeholder='Пароль'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Item 
                        type='password' 
                        name='confirm_password' 
                        classname='registration-form__input' 
                        placeholder='Подтвердите пароль'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    <Select options={options} className="select" classNamePrefix='select'/>
                    <div className="registration-form__button-group">
                        <Checkbox text={["Я прочитал и принимаю условия ", <Link to='#'><u>Пользовательского соглашения</u></Link> ]}/>
                    </div>
                    <Button type='submit' text='Зарегистрироваться' classname='registration-form__button'/>
                    <Link to='/login' className='login-link'>Войти в аккаунт</Link>
                </Form>
            </Block>
        </div>
    )
};

const Registration = withFormik({

    handleSubmit: (value, {setSubmitting}) => {
        console.log(value);
        setSubmitting(false);
    }
})(RegistrationForm)

export default Registration;