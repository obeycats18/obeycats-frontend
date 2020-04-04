import React from 'react';

import {
    Form,
    Button,
    Avatar,
    Select
} from 'components'


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
        values
    } = props;

    const inputs = [
        {
            type: "text",
            name: "name",
            placeholder: "Название"
        }
    ]

    const developers = users.filter(user => user.role.name !== 'client')

    const developersChange = (developers) => setFieldValue('members', developers)

    const onChange = (developers) => {
        developers.forEach(developer => {
            if(!reqDevs.includes(developer)){
                reqDevs.push(developer)
            }
        })
        developersChange(reqDevs)
    }


    let reqDevs = []
   
    const renderLabelRole = (role) => {
        const splitRole = role.split("_")
        let concatString = ''

        if(splitRole.length > 1) {
            splitRole.forEach(item => {
                concatString += item.substring(0, 1)
            });
        }else{
            concatString = role.substring(0, 3)
        }

        return concatString.toUpperCase()
    }

    const renderDevelopers = developers.map(developer => (
        {
            label: `${developer.first_name} ${developer.last_name}`,
            value: developer._id,
            children: <div className='developer-item'>
                <Avatar bgColor="A0B8FF" data={developer}/>
                <p className="developer-name">{developer.first_name} {developer.last_name}</p>
                <span className='role-label'>{renderLabelRole(developer.role.name)}</span>
            </div>
        }
    ))

    return (
        
        <Form
            inputs={inputs}
            values={values} 
            errors={errors} 
            touched={touched} 
            handleChange={handleChange} 
            onBlur={handleBlur}
            onSubmit={handleSubmit} 
            classname='create-form team-form'>
            <div className="developers-block">
                <Select
                    mode="multiple"
                    style={{ width: '100%' }}
                    placeholder="Выбирете разработчика"
                    onChange={onChange}
                    optionLabelProp="label"
                    options={renderDevelopers}
                />
            </div>

            <div className="button-group">
                
                <Button 
                    text='Создать' 
                    classname='create-form__button create-button' 
                    type='submit' 
                    isSubmitting={isSubmitting}
                    dataName='create'
                />
            </div>
        </Form>
    );
};

export default PopupCreate;