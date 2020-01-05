import React, {useState} from 'react';

import './style.scss'
import {
    Form,
    Item,
    ErrorMessage,
    Button,
} from 'components/common'

import { DatePicker, Select} from 'antd';

import classnames from 'classnames'

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
        users
    } = props;



    const options = users;
    // const clients = users;

    // let [teamLeadSelected, teamLeadSetSelected] = useState(null);
    // let [clientSelected, clientSetSelected] = useState(null);
    // let [focused, setFocused] = useState(null);

    // let handleTeamLeadChange = teamLead => {
    //     teamLeadSetSelected(teamLead)
    //     setFieldValue('teamLead', teamLead.value)
    // };

    // let handleClientChange = client => {
    //     clientSetSelected(client)
    //     setFieldValue('client', client.value)
    // };

    let handleClientChange = value => {
        setFieldValue('client', value)
    }
    let handleTeamLeadChange = value => {
        setFieldValue('teamLead', value)
    }

    let handleDateChange = (date, dateString) => {
        setFieldValue('dataToFinish', dateString)
    }

    let handleButtonClick = e => {
        setFieldValue('buttonName', e.target.dataset.name)
    }

    return (
        <div className='create-block popup-create'>
            <h3>Cоздание проекта</h3>
            <div className="popup-create-wrapper">
                <div className="popup-create-left">
                    <span className='description'>Базовая информация о проекте</span>
                    <Form onSubmit={handleSubmit} classname='popup-create-form'>
                        <Item 
                            type='text' 
                            name='name' 
                            classname='popup-create-form-input' 
                            placeholder='Название'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            validateStatus={ 
                                !touched.name 
                                    ? '' 
                                    : errors.name ? 'error' : 'success'
                                    
                            }
                        >
                            {
                                !touched.name 
                                ? '' 
                                : errors.name ? <ErrorMessage text={errors.name}/> : ''  
                            } 
                        </Item>
                        
                        <Item 
                            type='text' 
                            name='cost' 
                            classname='popup-create-form-input' 
                            placeholder='Цена'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            validateStatus={ 
                                !touched.cost 
                                    ? '' 
                                    : errors.cost ? 'error' : 'success'
                                    
                            }
                        >
                            {
                                !touched.cost 
                                ? '' 
                                : errors.cost ? <ErrorMessage text={errors.cost}/> : ''  
                            } 
                        </Item>

                        <DatePicker 
                            allowClear={false}
                            className='date-picker'
                            placeholder='Дата deadline'
                            onChange={handleDateChange}
                        />
                        
                        <Select 
                            onChange={handleTeamLeadChange} 
                            defaultValue='Team Lead'
                        >
                            {options.map(item => <Option className='dropdown-list' value={item.value}>{item.label}</Option>)}
                        </Select>

                        <Select onChange={handleClientChange} defaultValue='Заказчик' style={{marginTop: 20}}>
                            {options.map(item => <Option className='dropdown-list' value={item.value}>{item.label}</Option>)}
                        </Select>

                        <div className="popup-create__button-group">
                            
                            <Button 
                                text='Создать и выйти' 
                                classname='popup-create__button-group-link create-button' 
                                type='submit' 
                                isSubmitting={isSubmitting}
                                handleClick={handleButtonClick}
                                dataName='create'
                            />
                            <Button 
                                text='Отмена' 
                                classname='popup-create__button-group-link' 
                                typeButton='cancle'
                                type='button'
                                dataName='cancle'
                                handleClick={handleButtonClick}
                            />
                            <Button 
                                text='Далее' 
                                classname='popup-create__button-group-link' 
                                typeButton='ok'
                                isSubmitting={isSubmitting}
                                dataName='next'
                                handleClick={handleButtonClick}
                            />
                        </div>
                    </Form>
                </div>

                <div className="popup-create-right">
                    <span className='descripion'>Изображение (логотип, скриншот)</span>
                    <div className="drop-image">
                        <p>Перетащите сюда файл</p>
                        <Button text='Выбрать файл' classname='drop-button'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopupCreate;