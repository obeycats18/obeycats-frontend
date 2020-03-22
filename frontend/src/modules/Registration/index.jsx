import React from 'react';
import {Link} from 'react-router-dom'

import {
    Block,
    Button,
    Form,
    Select
} from 'components/common';

import './style.scss'

const RegistrationForm = props => {

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

    const options = [
        { value: 'project_manager', label: 'Project Manager' },
        { value: 'team_lead', label: 'Team Lead' },
        { value: 'developer', label: 'Разработчик' },
        { value: 'client', label: 'Клиент' },
    ];

    const inputs = [
        {
            type: "text",
            name: "last_name",
            placeholder: "Имя"
        },
        {
            type: "text",
            name: "first_name",
            placeholder: "Фамилия"
        },
        {
            type: "email",
            name: "email",
            placeholder: "E-mail"
        },
        {
            type: "password",
            name: "password",
            placeholder: "Пароль"
        },
        {
            type: "password",
            name: "confirm_password",
            placeholder: "Подтвердите пароль"
        },
    ]

    
    const handleSelectChange = value => {
        setFieldValue('role', value)
      };

    return (
        <div className="registration">
            <h3 className='registration-title'>Регистрация</h3>
            <Block type='registration' >
                <Form 
                    inputs={inputs}
                    values={values} 
                    errors={errors} 
                    touched={touched} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    onSubmit={handleSubmit} 
                    classname='registration-form'
                >
                    <Select options={options} defaultValue='Роль' handleChange={handleSelectChange}/>
                    <Button type='submit' isSubmitting={isSubmitting} text='Зарегистрироваться' size='large'/>
                    <Link to='/login' className='login-link'>Войти в аккаунт</Link>
                </Form>
            </Block>
        </div>
    )
};

export default RegistrationForm;