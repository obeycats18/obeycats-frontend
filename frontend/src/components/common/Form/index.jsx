import React from 'react';

const Form = ( {handleSumbit, children, classname} ) => {
    return (
        <form onSubmit={handleSumbit} className={classname}>
            {children}
        </form>
    );
};

export default Form;