import React, {useEffect} from 'react' 

import {connect} from 'react-redux'
import {setTeams} from 'redux/reducers/teams'

import Teams from '../index'

export default connect(
    ({teams}) => ({teams: teams.teams, isFetching: teams.isFetching}),
    {setTeams}
)( (props) => {

    console.log(props)
    const {setTeams, teams, isFetching} = props

    useEffect( () => {
        setTeams()
    }, [setTeams, teams.length])
    
    if(teams) return <Teams teams={teams} isFetching={isFetching}/>
})

