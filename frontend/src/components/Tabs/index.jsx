import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Empty } from 'antd';

import {Progress} from 'components'

import TabsTask from './TabsTasks';

import {map} from 'lodash'
import classNames from 'classnames'

import './style.scss'
import 'react-tabs/style/react-tabs.css';


const CommonTabs = (props) => {

    const {milestonesSet} = props

    let tabs = map(milestonesSet, (item) => {
      return {
        name: item.name,
        isDeveloped: item.isDeveloped,
        isNoReturn: item.isNoReturn
      }
    })


    let tabsContent = map(milestonesSet, (item) => {
      return {
        procentComplete: item.procentComplete,
        dateToFinish: item.date,
        tasks: map(item.tasks, (task => task))
      }
    })

    let renderTabs = () => {
       return tabs.map((item, index) => (
          <Tab
            key={index}
            selectedClassName='tab-active' 
            tabIndex={index}
            className={classNames(
              'tabs-bar__tab', 
              (item.completed)
                ? 'completed'
                : ''
            )}>
              {item.name}
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
          <TabPanel key={index} >
              <div className='tabs-pane'>
                <div className="tabs-pane__left">
                  <h4>
                    {
                      (item.procentComplete === 100)
                        ? 'Этап завершен'
                        : 'Этап завершен на'
                    }
                  </h4>
                  <div className="progress-block">
                    <Progress 
                        percent={item.procentComplete}  
                        type="circle" 
                        width={200} 
                        strokeWidth={4} 
                        strokeColor={'#10AC84'}
                        trailColor={"#DFE7FF"}/>
                  </div>
                </div>
                <div className="tabs-pane__right">
                    <TabsTask tasks={item.tasks}/>
                </div>
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
      
      <Tabs defaultIndex={0} className='tabs-wrapper'>
        <TabList className='tabs-wrapper__bar'>
          {renderTabs()}
        </TabList>
          {renderContent()}
      </Tabs>
    )
  }

export default CommonTabs;