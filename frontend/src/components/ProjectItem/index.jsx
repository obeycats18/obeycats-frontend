import React from 'react';

import Avatar from 'assets/wallpaper.jpg'

import {Link} from 'react-router-dom'
import classnames from 'classnames'

import './style.scss'

const ProjectItem = props => {

    const {
        _id,
        name,
        isDeveloped,
        client,
        procentComplete,
        teams,
        user
    } = props;

    let currentTeam
    if(user) [currentTeam] = teams.filter((team, index) => team._id === (user.teams[index]))
    console.log(currentTeam)
    return (
        <Link to={`/project?id=${_id}`} className="project">
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
                <div className="progress-bar">
                    <div className="bar"></div>
                    <div className="value" style={{width: `${procentComplete}%`}}></div>
                </div>
            </div>
            <div className="project-bottom">
                <div className="team-avatars">
                    <span className="avatar"><img src={Avatar} alt=""/></span>
                    <span className="avatar"><img src={Avatar} alt=""/></span>
                    <span className="team-more">+{currentTeam.members.length}</span>
                </div>
                <div className="project-status">
                    {
                        (isDeveloped)
                            ? <span className = {classnames( 'developing-status', 'not-developed' )}>Завершен</span>
                            : <span className = {classnames( 'developing-status', 'developed' )}>В разработке</span>
                    }
                </div>
            </div>
        </Link>
    );
};

export default ProjectItem;