import React from 'react';

const Form = ( {onSubmit, children, classname} ) => {
    return (
        <form onSubmit={onSubmit} className={classname}>
            {children}
        </form>
    );
};

export default Form;