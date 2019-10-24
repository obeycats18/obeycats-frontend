import React, {useState} from 'react';

import './style.scss'
import {
    Form,
    Item,
    ErrorMessage,
    Button,
    Select
} from 'components/common'

import classnames from 'classnames'


const PopupCreate = (props) => {

    const options = [
        { value: 'projectManager', label: 'Project Manager' },
        { value: 'teamLead', label: 'Team Lead' },
        { value: 'developer', label: 'Разработчик' },
        { value: 'clien', label: 'Клиент' },
    ];

    let [selected, setSelected] = useState(null);
    let [focused, setFocused] = useState(null);

    let onFocus = () => {
        setFocused(true)
    }

    let onBlur = () => {
        setFocused(false)
    }

    let handleSelectChange = selectedOption => {
        setSelected(selectedOption)
        setFieldValue('role', selectedOption.value)
    };


    const{
        setFieldValue,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        ok,
        cancle
    } = props;

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
                            // validateStatus={ 
                            //     !touched.last_name 
                            //         ? '' 
                            //         : errors.last_name ? 'error' : 'success'
                                    
                            // }
                        >
                            {/* {
                                !touched.last_name 
                                ? '' 
                                : errors.last_name ? <ErrorMessage text={errors.last_name}/> : ''  
                            }  */}
                        </Item>
                        
                        <Item 
                            type='text' 
                            name='email' 
                            classname='popup-create-form-input' 
                            placeholder='Цена'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // validateStatus={ 
                            //     !touched.email 
                            //         ? '' 
                            //         : errors.email ? 'error' : 'success'
                                    
                            // }
                        >
                            {/* {
                                !touched.email 
                                ? '' 
                                : errors.email ? <ErrorMessage text={errors.email}/> : ''  
                            }  */}
                        </Item>
                            
                        <Item 
                            type='text' 
                            name='password' 
                            classname='popup-create-form-input' 
                            placeholder='Дата deadline'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // validateStatus={ 
                            //     !touched.password 
                            //         ? '' 
                            //         : errors.password ? 'error' : 'success'
                                    
                            // }
                        >
                            {/* {
                                !touched.password 
                                ? '' 
                                : errors.password ? <ErrorMessage text={errors.password}/> : ''  
                            }  */}
                        </Item>
                        
                        <Select 
                            options={options} 
                            // type='select'
                            inputName="role"
                            classname={classnames("select", 'popup-create-form-select')} 
                            classnameprefix='select'
                            value={selected}
                            onChange={handleSelectChange}
                            onBlur = {onBlur}
                            onFocus = {onFocus}
                        >
                            {/* {
                                !focused
                                    ? '' 
                                    : (selected === null) ?  <ErrorMessage text={'Нужно выбрать роль'}/>: console.log('not error')
                                
                            } */}
                        </Select>


                        <Select 
                            options={options} 
                            // type='select'
                            inputName="role"
                            classname={classnames("select", 'popup-create-form-select')} 
                            classnameprefix='select'
                            value={selected}
                            onChange={handleSelectChange}
                            onBlur = {onBlur}
                            onFocus = {onFocus}
                        >
                            {/* {
                                !focused
                                    ? '' 
                                    : (selected === null) ?  <ErrorMessage text={'Нужно выбрать роль'}/>: console.log('not error')
                                
                            } */}
                        </Select>

                        <div className="popup-create__button-group">
                            <Button handleClick={cancle} text='Отмена' classname='popup-create__button-group-link' typeButton='cancle'/>
                            <Button handleClick={ok} text='Далее' classname='popup-create__button-group-link' typeButton='ok'/>
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