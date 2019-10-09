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
        values,
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
                <Form handleSubmit={handleSubmit} classname='registration-form'>
                    <Item 
                        type='text' 
                        name='last_name' 
                        classname='registration-form__input' 
                        placeholder='Имя'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.last_name}
                    />
                    <Item 
                        type='text' 
                        name='first_name' 
                        classname='registration-form__input' 
                        placeholder='Фамилия'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.first_name}
                    />
                    <Item 
                        type='email' 
                        name='email' 
                        classname='registration-form__input' 
                        placeholder='E-mail'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.email}
                    />
                    <Item 
                        type='password' 
                        name='password' 
                        classname='registration-form__input' 
                        placeholder='Пароль'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.password}
                    />
                    <Item 
                        type='password' 
                        name='confirm_password' 
                        classname='registration-form__input' 
                        placeholder='Подтвердите пароль'
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        value={values.confirm_password}
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
    mapPropsToValues: () => ({
        last_name: '',
        first_name: '',
        email: '',
        password: '',
        confirm_password: ''
    }),

    handleSubmit: (value, {setSubmitting}) => {
        console.log(value);
        setSubmitting(false);
    }
})(RegistrationForm)

export default Registration;