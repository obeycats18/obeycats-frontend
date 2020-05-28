import React from 'react';

import { Menu } from 'antd';
import {Link} from 'react-router-dom'

import {
    HomeIcon,
    Settings,
    Boards,
    Tasks,
    Teams
} from 'assets/menu-icons'

import { Message } from 'assets/header-icons'

import './style.scss'

const Sidebar = () => {

    const menu_elements = [
      {
        img_src: HomeIcon,
        link: '/',
        title: "Главная"
      },
      {
        img_src: Tasks,
        link: '/prtasks',
        title: "Мои задачи"
      },
      {
        img_src: Teams,
        link: '/teams',
        title: "Команды"
      }
    ]

    const menu = menu_elements.map((element, index) => (
        <Menu.Item key={index} className='sidebar-menu-item'>
            <Link to={element.link} className='sidebar-menu-item-link'>
              <img src={element.img_src} alt={element.title}/>
              <span>{element.title}</span>
            </Link>
        </Menu.Item>
    ))
    return (
      <div className='sidebar' >
        <Menu 
          className='sidebar-menu' 
          // inlineCollapsed={props.collapsed} 
          mode='inline'
          style={{padding: '25px 0 0 10px'}}
          >
            {menu}
        </Menu>
      </div>
      
    );
};

export default Sidebar;
