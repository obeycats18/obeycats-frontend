import React, {useState} from 'react';

import './style.scss'
import {
    Form,
    Item,
    ErrorMessage,
    Button,
    Select
} from 'components/common'

import { DatePicker } from 'antd';

import classnames from 'classnames'

const PopupCreate = props => {

    const{
        setFieldValue,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        switchModal,
        showModal,
        users
    } = props;

    let {idModal} = props

    const teamLeads = users;
    const clients = users;

    let [teamLeadSelected, teamLeadSetSelected] = useState(null);
    let [clientSelected, clientSetSelected] = useState(null);
    let [focused, setFocused] = useState(null);

    let handleTeamLeadChange = teamLead => {
        teamLeadSetSelected(teamLead)
        setFieldValue('teamLead', teamLead.value)
    };

    let handleClientChange = client => {
        clientSetSelected(client)
        setFieldValue('client', client.value)
    };

    let handleDateChange = (date, dateString) => {
        setFieldValue('dataToFinish', dateString)
    }

    let handleCancle = () => {
        //TODO Create cancling method
        showModal(false);
    }

    return (
        <div className='popup-create'>
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
                            options={teamLeads} 
                            inputName="teamLeadId"
                            classname={classnames("select", 'popup-create-form-select')} 
                            classnameprefix='select'
                            value={teamLeadSelected}
                            onChange={handleTeamLeadChange}
                            onBlur = { () => setFocused(false)}
                            onFocus = {() => setFocused(true)}
                            placeholderText='Team Lead'

                        >
                            {
                                !focused
                                    ? '' 
                                    : (teamLeadSetSelected === null) ?  <ErrorMessage text={'Нужно выбрать роль'}/>: console.log('not error')
                                
                            }
                        </Select>

                        <Select 
                            options={clients} 
                            inputName="client"
                            classname={classnames("select", 'popup-create-form-select')} 
                            classnameprefix='select'
                            value={clientSelected}
                            onChange={handleClientChange}
                            onBlur = { () => setFocused(false)}
                            onFocus = {() => setFocused(true)}
                            placeholderText='Заказчик'
                        >
                            {
                                !focused
                                    ? '' 
                                    : (clientSetSelected === null) ?  <ErrorMessage text={'Нужно выбрать роль'}/>: console.log('not error')
                                
                            }
                        </Select>

                        <div className="popup-create__button-group">
                            
                            <Button 
                                text='Создать' 
                                classname='popup-create__button-group-link create-button' 
                                type='submit' 
                                isSubmitting={isSubmitting}
                            />
                        </div>
                    </Form>
                    <div className="popup-create__button-group">
                        <Button 
                            handleClick={handleCancle}
                            text='Отмена' 
                            classname='popup-create__button-group-link' 
                            typeButton='cancle'
                        />
                        <Button 
                            handleClick={ () => switchModal(++idModal)} 
                            text='Далее' 
                            classname='popup-create__button-group-link' 
                            typeButton='ok'
                            isSubmitting={isSubmitting}
                        />
                    </div>
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