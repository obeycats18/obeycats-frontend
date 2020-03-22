import React from 'react';

import {ProjectItem, Content} from 'components';
import {PMCreateProject} from 'components/Protected'

import './style.scss'

const Projects = props => {

    const {data, user, isFetching} = props;
    
    return (
        (isFetching)
            ? <Content type="fetching"/>
            : (
                (data.length)
                    ? <div className="home-projects">
                        {data.map((item, key) => <ProjectItem {...item} user={user} key={key} /> )}
                    </div>
                    :  <Content type="empty"><PMCreateProject isEmpty={!data.length}/></Content>
                
            )
    )
}

export default Projects;