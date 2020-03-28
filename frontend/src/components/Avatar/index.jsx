import React from 'react'

import {Avatar} from 'antd'

import './style.scss'

const AvatarCommon = (props) => {

    const {data} = props

    return (
        <Avatar style={{backgroundColor: `#0F47F2`, verticalAlign: 'middle' }}>
            {
                data
                    ? data.first_name.substring(0, 1)
                    : ""
            }
        </Avatar>
    )
}
export default AvatarCommon

