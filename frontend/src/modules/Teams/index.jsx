import React from 'react';

import {Team, Content} from 'components'

import './style.scss'

const Teams = props => {

    const {teams} = props

    return teams ? teams.map(team => <Team team={team}/>) : <Content type='empty' emptyText='Команд еще нету'/>
};

export default Teams;