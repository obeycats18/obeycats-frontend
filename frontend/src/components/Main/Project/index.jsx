import React from 'react';

import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHryvnia} from '@fortawesome/free-solid-svg-icons'

import { Progress, Statistic } from 'antd';
import CheckIcon from 'assets/CheckIconGreen.svg'

import Countdown, {zeroPad} from 'react-countdown-now';

const ProjectPage = props => {

    let percent = 0.5;

    const deadline = new Date("Tue Dec 12 2019 00:00:00 GMT+0000 (Coordinated Universal Time)")

    let checkStatus = (percent) => {
        let status = '';
        
        (percent === 100) 
            ? status = 'success'
            : status = 'pending'
            
        return status
    }

    const renderer = ({ hours, days, minutes }) => {
        
        return (
            <div className='timer-block'>
                <div className='timer-block__wrapper'>
                    <div className='timer-block__day'>{zeroPad(days)} </div> 
                    <span className='title'>дней</span>
                </div>
                <div className="seperator">:</div>
                <div className='timer-block__wrapper'>
                    <div className='timer-block__hours'>{zeroPad(hours)}  </div>
                    <span className='title'>часов</span>
                </div>
                <div className="seperator">:</div>
                <div className='timer-block__wrapper'>
                    <div className='timer-block__hours'>{zeroPad(minutes)}  </div>
                    <span className='title'>минут</span>
                </div>
            </div>
        )
        
      };

    return (
        
        <div className="project-wrapper">
            <div className="project-wrapper__title"><h3>Lusso Strega</h3></div>
            <div className="project-wrapper__info">
                <h3>Общее</h3>
                <div className="project-wrapper__info-wrapper">
                    <div className="project-wrapper__right">
                        <div className="project-wrapper__block progress">
                            <h4>Выполненная работа</h4>
                            <Progress 
                                type="circle" 
                                percent={percent} 
                                width={250} 
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
                        </div>
                    </div>
                    <div className="project-wrapper__left">
                        <div className="project-wrapper__block cost">
                            <h4>Цена проекта</h4>
                            <span className='cost-text'>10 240 <FontAwesomeIcon className={"hryvnia-icon"} icon={faHryvnia}/> </span>
                        </div>
                        <div className="project-wrapper__block timer">
                            <h4>До сдачи проекта</h4>
                            <Countdown
                                date={deadline}
                                renderer={renderer}
                            />
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};


export default ProjectPage;