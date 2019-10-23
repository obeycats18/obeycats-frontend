import React from 'react';

import {Content} from 'components/common'

import './style.scss'
import ProjectItem from './ProjectItem';

const Home = props => {

    const {data} = props;

    return (
        <Content title="Мои проекты">
            <div className="home">
                {data.map((item, key) => <ProjectItem {...item} key={key} /> )}
            </div>
        </Content>
    );
};

export default Home;