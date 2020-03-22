import React, { useEffect } from 'react'

import {connect} from 'react-redux'

import { CredentialProvider } from "react-rbac-guard";
import {Client} from 'hoc/RBAC/Guards' 

import {setCredentials} from 'redux/reducers/users'

import Project from 'components/Main/Project'

const Component = (props) => {

    const {
        credentials,
        setCredentials
    } = props

    useEffect( () => {
        if(!credentials) setCredentials()
    }, [credentials, setCredentials])

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

const mapStateToProprs = ({users}) => {
    return {
        credentials: users.credentials
    }
}

export default connect(mapStateToProprs, {setCredentials})(Component)