import React, {  } from 'react';

import { Menu, Affix } from 'antd';
import {Link} from 'react-router-dom'

import {
    HomeIcon,
    Settings
} from 'assets/menu-icons'

import { Message } from 'assets/header-icons'

import './style.scss'

const Sidebar = ( {collapsed} ) => {
    return (
      // <Affix>
        <div className='sidebar'>
          <Menu className='sidebar-menu' mode='inline' inlineCollapsed={collapsed}>
            <Menu.Item key="1" className='sidebar-menu-item'>
                <Link to='' className='sidebar-menu-item-link'>
                  <img src={HomeIcon} alt=""/>
                  <span>Главная</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2" className='sidebar-menu-item'>
              <Link to='' className='sidebar-menu-item-link'>
                  <img src={Message} alt=""/>
                  <span>Сообщения</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" className='sidebar-menu-item'>
              <Link to='' className='sidebar-menu-item-link'>
                  <img src={Settings} alt=""/>
                  <span>Настройки</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      /* </Affix> */
    );
};

export default Sidebar;