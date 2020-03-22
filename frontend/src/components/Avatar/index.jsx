import React from 'react'

import './style.scss'

export const Avatar = (props) => {

    const {credentials} = props

    return (
        <div className="user">
            <div className="user-avatar">{
                credentials
                    ? credentials.first_name.substring(0, 1)
                    : ""
            }</div>
        </div>
    )
}


