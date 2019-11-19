import React from 'react';

import NoImage from 'assets/project-item/no-image2.svg'


import {Link} from 'react-router-dom'
import classnames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUserFriends} from '@fortawesome/free-solid-svg-icons'
import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'

import './style.scss'

const ProjectItem = props => {

    const {
        _id,
        name,
        isDeveloped,
        totalCount,
        perDay,
        image
    } = props;

    // console.log(milestones.milestones.map(item => item))

    return (
        <Link to={`/project?id=${_id}`}>
            <div className='project-item'>
                <div className="project-item-image">
                    
                    {
                        (image)
                            ? <img src={image} alt={name}/>
                            : <img className='no-image' src={NoImage} alt={name}/>
                    }
                    {
                        (isDeveloped)
                            ? <span className = {classnames( 'developing-status', 'not-developed' )}>Используеться</span>
                            : <span className = {classnames( 'developing-status', 'developed' )}>В разработке</span>
                    }
                    
                </div>
                <div className="project-item-bottom">
                    <div className="project-item-bottom-info">
                        <Link to={`/project?id=${_id}`}>{name}</Link>
                        <div className="project-item-bottom-analitics">
                            <div className="info-icons total-count">
                                <FontAwesomeIcon className={"users-icon"} icon={faUserFriends}/>
                                <span>{totalCount}</span>
                            </div>
                            <div className="info-icons per-day">
                                <FontAwesomeIcon className={"angle-icon"} icon={faAngleDoubleUp}/>
                                <span>{perDay}</span>
                            </div>
                        </div>
                    </div>
                    <div className='project-button'>
                        <Link className="project-button-link" to={`/project?id=${_id}`}>
                            <FontAwesomeIcon className={"angle-long-icon"} icon={faLongArrowAltRight}/>
                        </Link>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProjectItem;