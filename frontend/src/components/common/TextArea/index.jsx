import React from 'react';

import './style.scss'

const TextArea = props => {

    const {
        type,
        name,
        classname,
        validateStatus,
        placeholder,
        onChange,
        onBlur,
        handleClick,
        value,
        autofocus,
        keyAction
    } = props


    const expandedField = e => {
        let element = e.target
        setTimeout(function(){
            // element.style.cssText = 'height:auto; padding:17px 35px';
            element.style.cssText = 'height:' + element.scrollHeight + 'px';
          },0);
    }


    return (
        <textarea 
            type={type} 
            name={name} 
            className={'textarea ' + classname + ' ' + validateStatus} 
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            onClick={handleClick}
            value={value}
            autoFocus={autofocus}
            onKeyPress={keyAction}
            onKeyDown={expandedField}
            rows={1}
            ></textarea>
    );
};

export default TextArea;