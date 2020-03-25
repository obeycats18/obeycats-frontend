import React from 'react';

import {
    Input,
    ErrorMessage
} from 'components';

const Form = ( props ) => {

    const {
        onSubmit, 
        onChange,
        onBlur,
        children, 
        classname,
        inputs,
        errors,
        touched,
        values
    } = props

    let renderInputs = []
    if(inputs){
        renderInputs = inputs.map(input => (
            <Input 
                key={input.name}
                value={values[input.name]}
                type={input.type} 
                name={input.name} 
                placeholder={input.placeholder}
                onChange={onChange}
                onBlur={onBlur}
                validateStatus={ 
                    !touched[input.name] 
                        ? '' 
                        : errors[input.name] ? 'error' : 'success'
                        
                }
            > 
                {
                    !touched[input.name] 
                    ? '' 
                    : errors[input.name] ? <ErrorMessage text={errors[input.name]}/> : ''  
                } 
            </Input>
        ))
    }
        
    return (
        <form onSubmit={onSubmit} className={classname}>
            {renderInputs}
            {children}
        </form>
    );
};

export default Form;