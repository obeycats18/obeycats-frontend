import React from 'react';
import {Link} from 'react-router-dom'

import { Notification, Logout } from 'assets/header-icons'
    
import {logout} from 'redux/reducers/auth'

import './style.scss'

const Header = props => {
    
    const {credentials} = props

    return (
        <header className='header'>

            <div className="header-logo">
                <Link to='/'>
                    ObeyCats
                </Link>
            </div>

            <div className="header-control-bar">
                <div className="user">
                    <div className="user-avatar">{
                        credentials
                            ? credentials.first_name.substring(0, 1)
                            : ""
                    }</div>
                </div>
                <div className="header-notify-bar">
                    <div className="header-notification">
                        <img src={Notification} alt="Notification Icon"/>
                    </div>
                </div>
                <div className="logout">
                    <img onClick={logout} src={Logout} alt="Logout Icon"/>
                </div>
            </div>
        </header>
    );
};

export default Header;