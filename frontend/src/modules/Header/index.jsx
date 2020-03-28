import React from 'react';
import {Link} from 'react-router-dom'

import {Avatar} from 'components'
import { Notification, Logout } from 'assets/header-icons'
    
import {logout} from 'redux/reducers/auth'

import './style.scss'

const Header = () => {

    return (
        <header className='header'>

            <div className="header-logo">
                <Link to='/'>
                    ObeyCats
                </Link>
            </div>

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
        </header>
    );
};

export default Header;