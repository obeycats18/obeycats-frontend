import React from 'react';

// import { Tabs } from 'antd';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {Progress, Button} from 'components/common'
import { Empty } from 'antd';
import {map} from 'lodash'


import classNames from 'classnames'

import './style.scss'
import CheckIcon from 'assets/CheckIconGreen.svg'


const CommonTabs = (props) => {

    const {milestonesSet} = props

    console.log(milestonesSet)

    let tabs = map(milestonesSet.milestones, (item) => {
      return {
        title: item.milestoneName,
        isDeveloped: item.milestoneIsDeveloped,
        isNoReturn: item.isNoReturn
      }
    })


    let tabsContent = map(milestonesSet.milestones, (item) => {
      return {
        procentComplete: item.procentComplete,
        dateToFinish: item.milestoneDate,
        tasks: map(item.tasks, (task => task))
      }
    })

    let renderTabs = () => {
       return tabs.map((item, index) => (
          <Tab
            key={index}
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

    let renderContent = () => {
      if(tabsContent.length){
        return tabsContent.map( (item, index) => (
          <TabPanel key={index} className='tabs-pane'>
              <div className="tabs-pane__left">
                <h4>
                  {
                    (item.procentComplete === 100)
                      ? 'Этап завершен'
                      : 'Этап завершен на'
                  }
                </h4>
                <div className="progress-block">
                  <Progress percent={item.procentComplete} type='small'/>
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
                    <TabPanel  className='tabs-milestone__pane'>
                        {
                          (item.tasks.length)
                            ? item.tasks.map((task, index) => (
                              <ul>
                                <li key={index}>
                                  {
                                    (task.complete) 
                                      ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                                      : <span className='typical-icon'></span>
                                  }
                                {task.title}</li>
                              </ul>
                            ))
                            : <div className='empty-tasks-block'> 
                              <Empty description='Нет задач'/>
                            </div>
                        }
                    </TabPanel>
                    <TabPanel className='tabs-milestone__pane'>
                        {
                          (item.tasks.length)
                            ? item.tasks.map((task, index) => (
                              <ul>
                                <li key={index}>
                                  {
                                    (task.complete) 
                                      ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                                      : <span className='typical-icon'></span>
                                  }
                                {task.title}</li>
                              </ul>
                            ))
                            : <div className='empty-tasks-block'> 
                              <Empty description='Нет задач'/>
                            </div>
                        }
                    </TabPanel>
                    <TabPanel className='tabs-milestone__pane'>
                        {
                          (item.tasks.length)
                            ? item.tasks.map((task, index) => (
                              <ul>
                                <li key={index}>
                                  {
                                    (task.complete) 
                                      ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                                      : <span className='typical-icon'></span>
                                  }
                                {task.title}</li>
                              </ul>
                            ))
                            : <div className='empty-tasks-block'> 
                              <Empty description='Нет задач'/>
                            </div>
                        }
                    </TabPanel>
                </Tabs>
              </div>
          </TabPanel>
        ))
      }else{
        return (
          <div className='tabs-pane'>
            <div className='empty-milestones-block'> 
              <Empty description='Нет этапов'/>
            </div>
          </div>   
          
        )
      }
      
    }
    return (
      
      <Tabs className='tabs-wrapper'>
        <TabList className='tabs-wrapper__bar'>
          {renderTabs()}
        </TabList>
        {renderContent()}
      </Tabs>
    )
  }

export default CommonTabs;