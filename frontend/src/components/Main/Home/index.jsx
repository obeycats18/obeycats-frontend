import React from 'react';

import {Content} from 'components/common'

import './style.scss'
import ProjectItem from '../ProjectItem';
import CreateProject from '../CreateProject'

const Home = props => {

    const {data} = props;

    return (
        <Content title="Мои проекты">
            <div className="home">
                <div className="home-projects">
                    {data.map((item, key) => <ProjectItem {...item} key={key} /> )}
                </div>
                <div className="home-button">
                    <CreateProject />
                </div>
                
            </div>
        </Content>
    );
};

export default Home;