import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import Sidebar from '../Sidebar';

import './style.scss'

import {
    Logo,
    Message,
    Notification,
    Logout
} from 'assets/header-icons'

const Header = () => {

    let [collapsed, setCollapsed] = useState(true)

    let toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    
    return (
        <>
        <header className='header'>
            <Link 
                to='#'
                onClick={toggleCollapsed} 
                className='sidebar-burger-icon' 
            > 

                <div className="burger-icon" id={!collapsed ? "burger-active" : ' '}>
                    <span className='main_span'></span>
                </div>

            </Link>
            

            <div className="header-logo">
                <Link to='/'>
                    <img src={Logo} alt="Logotype"/>
                    ObeyCats
                </Link>
            </div>

            <div className="header-control-bar">
                <div className="user">
                    <div className="user-avatar">K</div>
                </div>
                <div className="header-notify-bar">
                    <div className="header-messages">
                        <img src={Message} alt="Message Icon"/>
                    </div>
                    <div className="header-notification">
                        <img src={Notification} alt="Notification Icon"/>
                    </div>
                </div>
                <div className="logout">
                    <img src={Logout} alt="Logout Icon"/>
                </div>
            </div>
        </header>
        <Sidebar collapsed={collapsed}/>
        </>
    );
};

export default Header;