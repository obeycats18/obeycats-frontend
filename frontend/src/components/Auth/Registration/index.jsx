import React from 'react';
import {Link} from 'react-router-dom'

import {
    Block,
    Button,
    Item,
    Form,
    Checkbox,
    ErrorMessage,
    Select
} from 'components/common';

import 'components/Auth/style.scss'

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

    
    const handleSelectChange = value => {
        setFieldValue('role', value)
      };

    return (
        <div className="registration">
            <h3 className='registration-title'>Регистрация</h3>
            <Block classname='registration-block' >
                <Form onSubmit={handleSubmit} classname='registration-form'>
                    <Item 
                        value={values.last_name}
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
                        value={values.first_name}
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
                        value={values.email}
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
                        value={values.password}
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
                        value={values.confirm_password}
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
                    <Select options={options} defaultValue='Роль' handleChange={handleSelectChange}/>

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