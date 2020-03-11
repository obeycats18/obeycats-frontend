import React, { useEffect } from 'react'

import {connect} from 'react-redux'

import { CredentialProvider } from "react-rbac-guard";
import {Developer} from 'hoc/RBAC/Guards' 

import Tasks from 'components/Main/Tasks/index.jsx'

import {setCredentials} from 'redux/reducers/users'

const Component = (props) => {

    const {
        credentials,
        setCredentials
    } = props

    useEffect( () => {
        setCredentials()
    }, [])

    let role = ""

    if(credentials){
        role = credentials.role.name
    }
    

    return (
        <CredentialProvider value={role || {}}>
            <Developer>
                <Tasks {...props}/>
            </Developer>
        </CredentialProvider>
        
    )
}

const mapStateToProprs = ({users}) => {
    return {
        credentials: users.credentials
    }
}

export default connect(mapStateToProprs, {setCredentials})(Component)