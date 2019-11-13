import React from 'react';

// import { Tabs } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classNames from 'classnames'

import {Progress, Button} from 'components/common'

import './style.scss'
import CheckIcon from 'assets/CheckIconGreen.svg'


class CommonTabs extends React.Component {

    tabs = [ 
      {title: 'Проектирование', isNoReturn: false, completed: true, content: {prop: 'Content'} }, 
      {title: 'Дизайн', isNoReturn: true,  completed: true, content: 'Content' } 
    ]

    renderTabs () {
       return this.tabs.map((item) => (
          <Tab
            selectedClassName='tab-active' 
            className={classNames(
              'tabs-bar__tab', 
              (item.completed)
                ? 'completed'
                : ''
            )}>
            {item.title}
            {
              (item.isNoReturn)
                ? <span className='no-return'>!</span>
                : ""
            }
          </Tab>
       ))
    }

    percent = 75
    task = {complete: false}
    renderContent(){
        

        return (
          <TabPanel className='tabs-pane'>
            <div className="tabs-pane__left">
              <h4>
                {
                  (this.percent === 100)
                    ? 'Этап завершен'
                    : 'Этап завершен на'
                }
              </h4>
              <div className="progress-block">
                <Progress percent={this.percent} type='small'/>
              </div>
              <div className="button-group">
                <Button text='Связаться с разработчиком' classname='button-contact'></Button>
              </div>
            </div>
            <div className="tabs-pane__right">
              <Tabs className='tabs-milestone'>
                <TabList className='tabs-milestone__bar'>
                  <Tab selectedClassName='tabs-milestone__active' className='tabs-milestone__tab'>Цели</Tab>
                  <Tab selectedClassName='tabs-milestone__active' className='tabs-milestone__tab'>Правки</Tab>
                  <Tab selectedClassName='tabs-milestone__active' className='tabs-milestone__tab'>История</Tab>
                </TabList>
                <TabPanel className='tabs-milestone__pane'>
                    <ul>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }
                        Сверстать шапку</li>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }Написать редьюсер который управляет состоянеем изменения имени профиля</li>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }Написать редьюсер который управляет состоянеем изменения имени профиля и добавить возможность изменени роли пользователя ( администратор, гость, модератор )</li>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }
                        Сверстать футер</li>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }Написать редьюсер который управляет состоянеем изменения имени профиля и добавить возможность изменени роли пользователя ( администратор, гость, модератор )</li>
                    </ul> 
                </TabPanel>
                <TabPanel className='tabs-milestone__pane'>
                    <ul>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }
                        Сверстать шапку</li>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }Написать редьюсер который управляет состоянеем изменения имени профиля</li>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }Написать редьюсер который управляет состоянеем изменения имени профиля и добавить возможность изменени роли пользователя ( администратор, гость, модератор )</li>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }
                        Сверстать футер</li>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }Написать редьюсер который управляет состоянеем изменения имени профиля и добавить возможность изменени роли пользователя ( администратор, гость, модератор )</li>
                    </ul> 
                </TabPanel>
                <TabPanel className='tabs-milestone__pane'>
                    <ul>
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }
                        Сверстать шапку</li>
                      
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }Написать редьюсер который управляет состоянеем изменения имени профиля и добавить возможность изменени роли пользователя ( администратор, гость, модератор )</li>
                    
                      <li>
                        {
                          (this.task.complete) 
                            ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                            : <span className='typical-icon'></span>
                        }Написать редьюсер который управляет состоянеем изменения имени профиля и добавить возможность изменени роли пользователя ( администратор, гость, модератор )</li>
                    </ul> 
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>
          
        )
    }

    render(){
      return (
        <Tabs className='tabs-wrapper'>
          <TabList className='tabs-wrapper__bar'>
            {this.renderTabs()}
          </TabList>

          {this.renderContent()}
        </Tabs>
      )
    }
  }

export default CommonTabs;