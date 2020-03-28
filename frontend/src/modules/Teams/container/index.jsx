import React, {useEffect} from 'react' 

import {connect} from 'react-redux'
import {setTeams} from 'redux/reducers/teams'

import Teams from '../index'
import { Content } from 'components'

export default connect(
    ({teams}) => ({teams: teams.teams, isFetching: teams.isFetching}),
    {setTeams}
)( (props) => {

    const {setTeams, teams, isFetching} = props

    useEffect( () => {
        setTeams()
    }, [setTeams, teams.length])

    return (

        (isFetching)
            ? <Content type="fetching"/>

            
            :(teams.length)
                ? <Teams teams={teams} isFetching={isFetching}/>
                : <Content type="empty" emptyText="Команд еще нет"/>
    )
})

