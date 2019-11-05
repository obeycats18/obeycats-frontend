import React, {useState} from 'react';

import './style.scss'

import {
    Form,
    Item,
    ErrorMessage,
    Button,
    Checkbox
} from 'components/common'

import {Link} from 'react-router-dom'

import { DatePicker } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLongArrowAltLeft} from '@fortawesome/free-solid-svg-icons'

import {openInfoModal} from 'helpers/openModal'

import RSC from 'react-scrollbars-custom'

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

    // console.log(props)

    let handleDateChange = (date, dateString) => {
        setFieldValue('milestoneDate', dateString)
    }

    let handleCancle = () => {
        //TODO Create cancling method
        showModal(false);
    }

    let [selected, setSelected] = useState(true);
    let noReturnHandleChange = e => {
        setSelected(!e.target.checked);
        setFieldValue('isNoReturn', selected);
    }

    let developers = [];

    let developersHandleChange = e => {
        if(e.target.checked){
            developers.push(users[e.target.dataset.id].value) 
            
        }else{
            developers.splice( developers.indexOf(users[e.target.dataset.id].value), 1)
        }
       
    }

    let onClickCreateButton = () => {
        setFieldValue('developers', developers);
    }

    let renderUsers = users.map( (item, index) => {
        return (
            <div className='block-developers__item' >
                <div className="block-developers__item-user">
                    <div className="block-developers__item-user-logo">
                        {item.label.substring(0, 1)}
                    </div>
                    <div className="block-developers__item-user-name">
                        {item.label}
                    </div>
                </div>
                <div className="block-developers__item-checkbox">
                    <Checkbox dataId={index} handleChange={developersHandleChange} typeCheckbox='light'/>
                </div>
            </div>
        )
    })

    //TODO добавить возле календаря кнопку "Помощь"
    let openModal = () => {
        openInfoModal(
            {
                title: 'Точка не возвтрата',
                text: ` А можно без правок? 
                        Можно. Есть такая штука, как точка невозврата. Это когда ты договариваешься с заказчиком, что после определенного этапа вы не вносите правки в эту часть проекта. 
                        Простой пример. Ты договорился, что сдашь концепт дизайна сайта к 8 апреля. Если заказчик примет этот концепт, то дальше по проекту он не будет вносить изменения в цвета сайта, размеры кнопок и т.д. То есть 8 апреля — это точка невозврата.
                        Отдельно можно договориться, что если заказчик все-таки хочет внести правки, они оплачиваются отдельно по часовому тарифу. 
                        Такая мелочь, а сколько сэкономленных нервов и времени  `,
                width: 800,
                classname: 'modal-info'
            }
        )
    }

    return (
        <div className='popup-create'>
            
            <div className="header-title">
                <Link to='#' onClick={() => switchModal(--idModal)}> <FontAwesomeIcon className={"angle-icon"} icon={faLongArrowAltLeft}/> </Link>
                <h3>Cоздание этапов</h3>
            </div>
            <div className="popup-create-wrapper">
                <div className="popup-create-left">
                    <span className='description'>Базовая информация об этапе</span>
                    <Form onSubmit={handleSubmit} classname='popup-create-form'>
                        <Item 
                            type='text' 
                            name='milestoneName' 
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
                        
                        
                        <DatePicker 
                            allowClear={false}
                            className='date-picker'
                            placeholder='Дата deadline'
                            onChange={handleDateChange}
                        />

                        <div className="block-no-return">
                            <Checkbox handleChange={noReturnHandleChange} text='Точка невозразата'/>
                            <Link 
                                to="#" 
                                className='modal-info-link' 
                                onClick={openModal}
                            >Узнать больше</Link>
                        </div>


                        <div className="popup-milestone__button-group">
                            <Button 
                                handleClick={handleCancle}
                                text='Отмена' 
                                classname='popup-milestone__button-group-link' 
                                typeButton='cancle'
                                type='button' 
                            />
                            <Button 
                                text='Завершить' 
                                classname='popup-milestone__button-group-link create' 
                                type='submit' 
                                isSubmitting={isSubmitting}
                                handleClick={onClickCreateButton}
                            />
                        </div>
                    </Form>
                </div>
                
                <div className="popup-create-right ">
                    <span className='popup-create-right-description'>Разработчики</span>
                    <RSC style={{ height: 685 }}>
                        <div className="block-developers">
                            {renderUsers}
                        </div>
                    </RSC>
                </div>
                
            </div>
        </div>
    );
};

export default PopupCreate;