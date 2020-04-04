import React from 'react';
import {Link} from 'react-router-dom'

import {Avatar} from 'components'
import { Notification, Logout } from 'assets/header-icons'
    
import {logout} from 'redux/reducers/auth'

import {
    MenuOutlined,
    CloseOutlined
} from '@ant-design/icons';

import {Row, Col} from 'antd'

import './style.scss'

const Header = props => {
    console.log(props)
    return (
        
        <header className='header'>
            <Row align="middle" style={{width: '100%'}}>
                <Col span={4}>
                    <div style={{display: 'flex', alignItems: 'center', marginLeft: 33}}>
                        {
                            props.collapsed
                                ? <CloseOutlined onClick={props.collapseMenu}/>
                                : <MenuOutlined onClick={props.collapseMenu}/>
                        }
                        <div className="header-logo">
                            <Link to='/'>
                                ObeyCats
                            </Link>
                        </div>
                    </div>
                </Col>
                <Col xxl={2} xl={2} xs={4} span={3} offset={16}>
                    <div className="header-control-bar">
                    
                        <Avatar type='me'/>

                        <div className="header-notify-bar">
                            <div className="header-notification">
                                <img src={Notification} alt="Notification Icon"/>
                            </div>
                        </div>
                        <div className="logout">
                            <img onClick={logout} src={Logout} alt="Logout Icon"/>
                        </div>
                    </div>
                </Col>
            </Row>
            

            

            
        </header>
    );
};

export default Header;