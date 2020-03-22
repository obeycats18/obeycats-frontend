import React from 'react';

import { Spin, Icon } from 'antd';

import classnames from 'classnames'

import './style.scss'

const Content = ( {children, type, style, classname} ) => {
    
    switch(type){
        case 'fetching': return (
            <div style={style} className={classnames("fetching-block", classname)}> 
                 <Spin indicator={<Icon type="loading" style={{ fontSize: 36 }} spin />}/> 
            </div>
        )
        case 'empty': return  (
            <div style={style} className={classnames('empty-block', classname)}>  {children} </div>
        )
        default: return  <div style={style} className={classnames('content', type, classname)}>  {children} </div>
    }
}

export default Content;