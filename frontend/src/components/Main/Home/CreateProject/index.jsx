import React from 'react';

import {Link, withRouter} from 'react-router-dom'
import {Icon} from 'antd'

import {Button} from 'components/common'

import './style.scss'

const CreateProject = (props) => {
    const {type} = props;

    const pushURL = () => {
        props.history.push('project/add')
    }

    return (
        <div className='button-create'>
            {
                (type === 'empty')
                    ? <Button handleClick={pushURL} classname='button-empty' text='Создать сейчас'></Button>
                    : <Link to='project/add' className='button-create-link'><Icon type="plus" /></Link>
            }
            
        </div>
    );
};

export default withRouter(CreateProject);