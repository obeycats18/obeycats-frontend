import React from 'react';

import wallpaper from 'assets/wallpaper.jpg'
import {Icon, Popover} from 'antd'
import {Scrollbars} from 'react-custom-scrollbars'
import {Link} from 'react-router-dom'
import {Avatar} from 'components'

import './style.scss'

const Team = props => {

    const {team} = props

    const popoverContent = (
        <div className='popover-content'> 
            <Link to="#" style={{marginBottom: 10, display: "inline-block"}} ><Icon style={{ fontSize: '16px'}} type="edit" theme="outlined"/> Редактировать</Link><br/>
            <Link to="#"><Icon style={{ fontSize: '16px' }} type="delete" theme="outlined"/> Удалить</Link>
        </div>
    )

    return (
        <div className="team">
            <div className="team-top">
                <span className="team-name">{team.name}</span>
                <Popover placement="right" content={popoverContent} trigger="click">
                    <button className="team-kebab"><Icon style={{ fontSize: '24px', color: '#fff' }} type="ellipsis" theme="outlined"/></button>
                </Popover>
            </div>
            <div className="team-members">
                <Scrollbars  style={{ height: 100 }} autoHideTimeout={500} autoHide>
                    {
                        team.members.map(member => (
                            <div className="member">
                                <Avatar bgColor="A0B8FF" data={member}/>
                                <p className="member-name">{member.first_name} {member.last_name}</p>
                            </div>
                        ))
                    }
                </Scrollbars >
            </div>
        </div>
    );
};

export default Team;