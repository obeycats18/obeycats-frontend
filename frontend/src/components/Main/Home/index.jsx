import React from 'react';

import {Content} from 'components/common'
import { Spin, Icon, Empty } from 'antd';

import './style.scss'
import ProjectItem from './ProjectItem';
import CreateProject from './CreateProject'


const Home = props => {

    const {data} = props;
    
    return (
        (props.isFetching)
            ? <div className='fetching-block'><Spin indicator={<Icon type="loading" style={{ fontSize: 36 }} spin />}/></div>
            : (
                (data.length)
                    ? <Content style={{margin: "50px"}}>
                        <div className="content-header">
                            <h3>Мои проекты</h3>
                            <div className="home-button">
                                <CreateProject />
                            </div>
                        </div>
                        <div className="home">
                            <div className="home-projects">
                                {data.map((item, key) => <ProjectItem {...item} key={key} /> )}
                            </div>
                            
                            
                        </div>
                    </Content>
                    : <div className='empty-block'>
                        <Empty description='Проектов не существует'/>
                        <div className="home-button">
                            <CreateProject type='empty'/>
                        </div>
                    </div>
                
            )
    );
};

export default Home;