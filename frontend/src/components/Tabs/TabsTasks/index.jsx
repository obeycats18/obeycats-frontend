import React from 'react' 

import { Empty } from 'antd';

import CheckIcon from 'assets/CheckIconGreen.svg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../style.scss'

const TabsTask = props => {

    const {
        tasks
    } = props

    const tabs = {
        title: ['Задачи', 'Правки', 'История'],
    }

    const content = [tasks, [], []]
    
    return (
        <Tabs className='tabs-milestone'>
            <TabList className='tabs-milestone__bar'>
            {
                tabs.title.map((item, index) => <Tab key={item} selectedClassName='tabs-milestone__active' className='tabs-milestone__tab'>{item}</Tab>)
            }
            </TabList>

            {
                content.map((item, index) => {
                    return <TabPanel key={index}>
                        <div className='tabs-milestone__pane'>
                            {
                                (item.length)
                                ?<ul key={index}>
                                    {
                                        item.map((item, index) => (
                                            <li key={index}>
                                                {
                                                (item.complete) 
                                                    ? <span> <img src={CheckIcon} alt={'Icon Success'} width={11}/> </span>
                                                    : <span className='typical-icon'></span>
                                                }
                                            {item.text}</li>
                                        ))
                                    }
                                </ul>
                                :<div className='empty-tasks-block'> 
                                    <Empty description='Нет задач'/>
                                </div>
                            }
                        </div>
                    </TabPanel>
                })
                    
            }

            
        </Tabs>
    )
}

export default TabsTask