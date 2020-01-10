import React from 'react';

import { Progress } from 'antd';

import CheckIcon from 'assets/CheckIconGreen.svg'

import './style.scss'

const ProgresComponent = ( {percent, type} ) => {

    let checkStatus = (percent) => {
        let status = '';
        
        (percent === 100) 
            ? status = 'success'
            : status = 'pending'
            
        return status
    }

    let setWidth = () => {
        if(type === 'big'){
            return 250
        }
        if(type === 'small'){
            return 200
        }
    }

    return (
        <Progress 
            type="circle" 
            percent={percent} 
            width={setWidth()} 
            strokeWidth={4} 
            strokeColor={'#10AC84'}
            format={ () => {
                if(checkStatus(percent) === 'success'){
                    return <img src={CheckIcon} alt={'Icon Success'} width={25}/>
                }
                else{
                    return <p className='progress-text'>{`${percent} %`}</p>
                }
            } }/>
    );
};

export default ProgresComponent;