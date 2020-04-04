import React from 'react';

import { Progress } from 'antd';

import CheckIcon from 'assets/CheckIconGreen.svg'

import './style.scss'

const ProgresComponent = ( props ) => {
    
    let checkStatus = (percent) => {
        let status = '';
        
        (percent === 100) 
            ? status = 'success'
            : status = 'pending'
            
        return status
    }

    // let setWidth = () => {
        
    //     if(type === 'big'){
    //         return 150
    //     }
    //     if(type === 'small'){
    //         return 200
    //     }
    // }

    return (
        <Progress 
           {...props}
            format={ () => {
                if(checkStatus(props.percent) === 'success'){
                    return <img src={CheckIcon} alt={'Icon Success'} width={25}/>
                }
                else{
                    return <p className='progress-text'>{`${props.percent}%`}</p>
                }
            } }/>
    );
};

export default ProgresComponent;