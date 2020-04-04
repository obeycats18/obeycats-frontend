import React, { useEffect } from 'react'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'

import { CredentialProvider } from "react-rbac-guard";
import {Client} from 'hoc/RBAC/Guards' 

import {getProject} from 'redux/reducers/projects'


import {Project} from 'components'

const Component = (props) => {

    const {
        location,
        getProject,
        project,
        credentials
    } = props

    let id = location.search.split('=')[1]
    
    useEffect( () => {
        getProject(id)
    }, [!project])

    let role = ""

    if(credentials){
        role = credentials.role.name
    }

    return (
        <CredentialProvider value={role || {}}>
            <Client>
                <Project {...props}/>
            </Client>
        </CredentialProvider>
        
    )
}


const mapStateToProprs = ({projects, users}) => {
    return {
        credentials: users.credentials,
        isFetching: projects.isFetching,
        project: projects.project,
        milestones: projects.milestones
    }
}

export default compose(
    connect (mapStateToProprs, {getProject}),
    withRouter
)(Component)