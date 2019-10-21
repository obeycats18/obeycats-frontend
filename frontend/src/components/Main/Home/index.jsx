import React from 'react';

import {Content} from 'components/common'

import Image from 'assets/project-item/item1.jpg'

import './style.scss'
import ProjectItem from './ProjectItem';

const Home = () => {

    const data = [
        {
            name: 'Lusso Strega',
            isDeveloping: true,
            totalCount: '1024',
            perDay: '10',
            image: Image
        },

        {
            name: 'Test Project',
            isDeveloping: false,
            totalCount: '4580',
            perDay: '27',
            image: null
        },
        {
            name: 'Lusso Strega',
            isDeveloping: true,
            totalCount: '1024',
            perDay: '10',
            image: Image
        },

        {
            name: 'Test Project',
            isDeveloping: false,
            totalCount: '4580',
            perDay: '27',
            image: null
        },

        {
            name: 'Test Project',
            isDeveloping: false,
            totalCount: '4580',
            perDay: '27',
            image: null
        }

    ]

    let projects = data.map((item, key) => <ProjectItem {...item} key={key} />)

    return (
        <Content title="Мои проекты">
            <div className="home">
                {projects}
            </div>
        </Content>
    );
};

export default Home;