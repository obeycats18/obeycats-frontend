import React, {  } from 'react';

import { Menu, Affix } from 'antd';
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
        img_src: Message,
        link: '',
        title: "Сообщения"
      },
      {
        img_src: Tasks,
        link: '/prtasks',
        title: "Задачи"
      },
      {
        img_src: Teams,
        link: '/teams',
        title: "Команды"
      },
      {
        img_src: Boards,
        link: '/boards',
        title: "Доски"
      },
      {
        img_src: Settings,
        link: '',
        title: "Настройки"
      },
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
      <Affix>
        <div className='sidebar'>

          <Menu className='sidebar-menu' mode='inline'>
              {menu}
          </Menu>
        </div>
      </Affix>
    );
};

export default Sidebar;
