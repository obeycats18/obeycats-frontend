import React from 'react';

import {ProjectItem, Content} from 'components';
import {PMCreateProject} from 'components/Protected'

import './style.scss'

const Projects = props => {

    const {data,  isFetching} = props;
    console.log(data)
    return (
        (isFetching)
            ? <Content type="fetching"/>
            : (
                (data.length)
                    ? <div className="home-projects">
                        {data.map((item) => <ProjectItem {...item} key={item._id} /> )}
                    </div>
                    :  <Content type="empty"><PMCreateProject isEmpty={!data.length}/></Content>
                
            )
    )
}

export default Projects;