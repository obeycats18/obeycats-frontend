import React from 'react';

import {
    Form,
    Button
} from 'components'

import { DatePicker, Select} from 'antd';

import './style.scss'

const {Option} = Select

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
        values
    } = props;

    const inputs = [
        {
            type: "text",
            name: "name",
            placeholder: "Название"
        }
    ]

    const options = users.filter(user => user.role.name === 'client');
    console.log(users)

    let handleClientChange = value => {
        setFieldValue('client', value)
    }

    let handleDateChange = (date, dateString) => {
        setFieldValue('dataToFinish', dateString)
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
            onChange={handleChange} 
            onBlur={handleBlur}
            onSubmit={handleSubmit} 
            classname='create-form'>
            
            <DatePicker 
                allowClear={false}
                className='date-picker'
                placeholder='Дата deadline'
                onChange={handleDateChange}
            />
            

            <Select onChange={handleClientChange} defaultValue='Заказчик'>
                {options.map(item => <Option key={item._id} className='dropdown-list' value={item._id}>{item.first_name} {item.last_name}</Option>)}
            </Select>

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