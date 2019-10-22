import React from 'react';

import {Content} from 'components/common'

import Image from 'assets/project-item/item1.jpg'

import './style.scss'
import ProjectItem from './ProjectItem';

const Home = props => {

    const {data} = props;
    // console.log(data)

    let projects = data.map((item, key) => {
        console.log(item)
        return <ProjectItem {...item} key={key} /> })

    return (
        <Content title="Мои проекты">
            <div className="home">
                {projects}
            </div>
        </Content>
    );
};

export default Home;