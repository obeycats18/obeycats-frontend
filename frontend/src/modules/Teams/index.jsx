import React from 'react';

import {Team} from 'components'

import './style.scss'

const Teams = props => {

    const {teams} = props

    return teams.map(team => <Team team={team}/>)
};

export default Teams;