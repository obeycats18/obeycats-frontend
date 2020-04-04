import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHryvnia} from '@fortawesome/free-solid-svg-icons'

import { Spin, Icon } from 'antd';

import {Timer, Tabs, Progress} from 'components'

import './style.scss'

const ProjectPage = props => {

    const {
        project, 
        milestones,
        isFetching
    } = props
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
                                <Progress 
                                    percent={project.procentComplete}  
                                    type="circle" 
                                    width={150} 
                                    strokeWidth={4} 
                                    strokeColor={'#10AC84'}
                                    trailColor={"#DFE7FF"}/>
                            </div>
                        </div>
                        <div className="project-wrapper__left">
                            <Timer project={project}/>
                        </div>
                    </div>
                    <h3>Этапы разработки</h3>
                    <Tabs milestonesSet={milestones}/>
                </div>
            </div>
    );
};


export default ProjectPage;