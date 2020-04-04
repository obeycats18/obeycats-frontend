import React from 'react';

import {Link} from 'react-router-dom'
import {Avatar, Progress} from 'components'
import classnames from 'classnames'

import './style.scss'
import { Col } from 'antd';

const ProjectItem = props => {

    const {
        _id,
        name,
        isDeveloped,
        client,
        procentComplete,
        teams,
    } = props;

    let renderTeam = []
    teams.forEach(team => {
        if(team.members){
            renderTeam = team.members.map((member, index) => {
                if(index < 3) {
                    return <Avatar key={member._id} data={member}/>
                }
            })
        }
    })
    return (
        <Col xxl={5} xl={6} lg={8} md={10}>
            <Link  to={`/project?id=${_id}`} className="project">
                <div className="project-title">
                    <div className="project-name">
                        <h3 className="name">{name}</h3>
                        <p className="client">{client.first_name} {client.last_name}</p>
                    </div>
                    
                </div>
                <div className="project-progress">
                    <div className="progress-info">
                        <p>Выполненно</p>
                        <span>{procentComplete} %</span>
                    </div>
                    {/* <div className="progress-bar">
                        <div className="bar"></div>
                        <div className="value" style={{width: `${procentComplete}%`}}></div>
                    </div> */}

                    <Progress 
                            percent={procentComplete}  
                            type="line" 
                            width={`100%`} 
                            strokeWidth={3} 
                            showInfo={false}
                            strokeColor={'#0F47F2'}/>
                </div>
                <div className="project-bottom">
                    <div className="team-avatars">
                        {renderTeam}
                    </div>
                    <div className="project-status">
                        {
                            (isDeveloped)
                                ? <span className = {classnames( 'developing-status', 'developed' )}>В разработке</span>
                                : <span className = {classnames( 'developing-status', 'not-developed' )}>Завершен</span>
                        }
                    </div>
                </div>
            </Link>
        </Col>
    );
};

export default ProjectItem;