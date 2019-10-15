import React from 'react';
import {Link} from 'react-router-dom'

import {useState} from 'react'

import Form from 'components/common/Form';
import Item from 'components/common/Item';
import Button from 'components/common/Button';
import Block from 'components/common/Block';
import Checkbox from 'components/common/Checkbox';
import ErrorMessage from 'components/common/ErrorMessage';
import Select from 'components/common/Select';


import 'components/Auth/style.scss'

const RegistrationForm = props => {

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

    // console.log(props);
    

    const{
        setFieldValue,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
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
                        validateStatus={ 
                            !touched.last_name 
                                ? '' 
                                : errors.last_name ? 'error' : 'success'
                                
                        }
                    >
                        {
                            !touched.last_name 
                            ? '' 
                            : errors.last_name ? <ErrorMessage text={errors.last_name}/> : ''  
                        } 
                    </Item>
                    <Item 
                        type='text' 
                        name='first_name' 
                        classname='registration-form__input' 
                        placeholder='Фамилия'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        validateStatus={ 
                            !touched.first_name 
                                ? '' 
                                : errors.first_name ? 'error' : 'success'
                                
                        }
                    >
                        {
                            !touched.first_name 
                            ? '' 
                            : errors.first_name ? <ErrorMessage text={errors.first_name}/> : ''  
                        } 
                    </Item>
                    <Item 
                        type='email' 
                        name='email' 
                        classname='registration-form__input' 
                        placeholder='E-mail'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        validateStatus={ 
                            !touched.email 
                                ? '' 
                                : errors.email ? 'error' : 'success'
                                
                        }
                    >
                        {
                            !touched.email 
                            ? '' 
                            : errors.email ? <ErrorMessage text={errors.email}/> : ''  
                        } 
                    </Item>
                        
                    <Item 
                        type='password' 
                        name='password' 
                        classname='registration-form__input' 
                        placeholder='Пароль'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        validateStatus={ 
                            !touched.password 
                                ? '' 
                                : errors.password ? 'error' : 'success'
                                
                        }
                    >
                        {
                            !touched.password 
                            ? '' 
                            : errors.password ? <ErrorMessage text={errors.password}/> : ''  
                        } 
                    </Item>
                    <Item 
                        type='password' 
                        name='confirm_password' 
                        classname='registration-form__input' 
                        placeholder='Подтвердите пароль'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        validateStatus={ 
                            !touched.confirm_password 
                                ? '' 
                                : errors.confirm_password ? 'error' : 'success'
                                
                        }
                    >
                        {
                            !touched.confirm_password 
                            ? '' 
                            : errors.confirm_password ? <ErrorMessage text={errors.confirm_password}/> : ''  
                        } 
                    </Item>

                    <Select 
                        options={options} 
                        // type='select'
                        inputName="role"
                        classname="select" 
                        classnameprefix='select'
                        value={selected}
                        onChange={handleSelectChange}
                        onBlur = {onBlur}
                        onFocus = {onFocus}
                    >
                        {
                            !focused
                                ? '' 
                                : (selected === null) ?  <ErrorMessage text={'Нужно выбрать роль'}/>: console.log('not error')
                            
                        }
                    </Select>

                    <div className="registration-form__button-group">
                        <Checkbox text={["Я прочитал и принимаю условия ", <Link to='#'><u>Пользовательского соглашения</u></Link> ]}/>
                    </div>
                    <Button type='submit' isSubmitting={isSubmitting} text='Зарегистрироваться' classname='registration-form__button'/>
                    <Link to='/login' className='login-link'>Войти в аккаунт</Link>
                </Form>
            </Block>
        </div>
    )
};

export default RegistrationForm;