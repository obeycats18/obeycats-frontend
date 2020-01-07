import React from 'react';

import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHryvnia} from '@fortawesome/free-solid-svg-icons'

import { Spin, Icon } from 'antd';

import Countdown, {zeroPad} from 'react-countdown-now';

import {Tabs, Progress} from 'components/common'

const ProjectPage = props => {

    const {
        project, 
        milestones,
        isFetching
    } = props
    let percent = project.procentComplete; 

    const deadline = new Date(project.dateToFinish);

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
        (isFetching) 
            ? <div className='fetching-block'><Spin indicator={<Icon type="loading" style={{ fontSize: 36 }} spin />}/></div>
            :<div className="project-wrapper" style={{margin: "50px"}}>
                <div className="project-wrapper__title"><h3>{project.name}</h3></div>
                <div className="project-wrapper__info">
                    <h3>Общее</h3>
                    <div className="project-wrapper__info-wrapper">
                        <div className="project-wrapper__right">
                            <div className="project-wrapper__block progress">
                                <h4>Выполненная работа</h4>
                                <Progress percent={percent} type='big'/>
                            </div>
                        </div>
                        <div className="project-wrapper__left">
                            <div className="project-wrapper__block cost">
                                <h4>Цена проекта</h4>
                                <span className='cost-text'>{project.cost}<FontAwesomeIcon className={"hryvnia-icon"} icon={faHryvnia}/> </span>
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
                    <h3>Этапы разработки</h3>
                    <Tabs milestonesSet={milestones}/>
                </div>
            </div>
    );
};


export default ProjectPage;