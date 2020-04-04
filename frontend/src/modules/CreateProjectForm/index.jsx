import React from 'react';

import {
    Form,
    Button,
    Select
} from 'components'

import { DatePicker} from 'antd';

import './style.scss'

const PopupCreate = props => {

    const{
        setFieldValue,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        users,
        values,
        teams
    } = props;

    const inputs = [
        {
            type: "text",
            name: "name",
            placeholder: "Название"
        }
    ]

    const clients = users.filter(user => user.role.name === 'client').map(client => (
        {
            value: client._id,
            label: `${client.first_name} ${client.last_name}`
        }
    ));

    const teamsOptions = teams.map(team => (
        {
            value: team._id,
            label: team.name
        }
    ))

    let handleClientChange = (value) => {
        setFieldValue('client', value)
    }

    let handleTeamsChange = (value) => {
        setFieldValue('teams', value)
    }

    let handleDateChange = (date, dateString) => {
        setFieldValue('dateToFinish', dateString)
    }

    let handleButtonClick = e => {
        setFieldValue('buttonName', e.target.dataset.name)
    }

    return (
        <Form
            inputs={inputs}
            values={values} 
            errors={errors} 
            touched={touched} 
            handleChange={handleChange} 
            onBlur={handleBlur}
            onSubmit={handleSubmit} 
            classname='create-form'>
            
            <DatePicker 
                allowClear={false}
                className='date-picker'
                placeholder='Дата deadline'
                onChange={handleDateChange}
            />
            

            <Select onChange={handleClientChange} style={{marginBottom: 20}} options={clients} defaultValue='Заказчик' />

            <Select onChange={handleTeamsChange} options={teamsOptions} defaultValue='Команда'/>

            <div className="button-group">
                
                <Button 
                    text='Создать и выйти' 
                    classname='create-form__button create-button' 
                    type='submit' 
                    isSubmitting={isSubmitting}
                    handleClick={handleButtonClick}
                    dataName='create'
                />
                <Button 
                    text='Отмена' 
                    classname='create-form__button' 
                    typeButton='cancle'
                    type='button'
                    dataName='cancle'
                    handleClick={handleButtonClick}
                />
                <Button 
                    text='Далее' 
                    classname='create-form__button' 
                    typeButton='ok'
                    isSubmitting={isSubmitting}
                    dataName='next'
                    handleClick={handleButtonClick}
                />
            </div>
        </Form>
    );
};

export default PopupCreate;