import React from 'react';

import {ProjectItem, Content} from 'components';
import {PMCreateProject} from 'components/Protected'

import { Row} from 'antd';

import './style.scss'

const Projects = props => {

    const {projects,  isFetching} = props;
    console.log(projects)
    return (
        (isFetching)
            ? <Content type="fetching"/>
            : (
                (projects.length)
                    ? <Row gutter={16}>
                        {projects.map((project) => <ProjectItem {...project} key={project._id} /> )}
                    </Row>
                    :  <Content type="empty" emptyText='Проектов еще нет. Создайте свой первый проект (если у вас нет доступа - подождите пока это сделает разработчик)'><PMCreateProject isEmpty={!projects.length}/></Content>
                
            )
    )
}

export default Projects;