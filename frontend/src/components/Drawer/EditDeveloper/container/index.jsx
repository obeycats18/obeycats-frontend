import React,{ useEffect } from 'react'

import {connect} from 'react-redux'

import EditDeveloper from '../index'

import {setMembers} from 'redux/reducers/teams'

export default connect(

    ({teams}) => ({members: teams.members}),
    {setMembers}

)(props => {

    const {members,setMembers} = props

    useEffect(() => {
        setMembers()
    }, [members.length])

    return (
        <EditDeveloper {...props} members={members}/>
    )
}) 