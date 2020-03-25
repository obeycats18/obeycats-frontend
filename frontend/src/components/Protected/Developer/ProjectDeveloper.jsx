import React from 'react'

import {connect} from 'react-redux'

import { CredentialProvider } from "react-rbac-guard";
import {Developer} from 'hoc/RBAC/Guards' 

import {Tasks} from 'pages'


const Component = (props) => {

    const {
        credentials
    } = props

    let role = ""

    if(credentials){
        role = credentials.role.name
    }
    

    return (
        <CredentialProvider value={role || {}}>
            <Developer>
                <Tasks {...props} isDeveloper/>
            </Developer>
        </CredentialProvider>
        
    )
}

const mapStateToProprs = ({users}) => {
    return {
        credentials: users.credentials
    }
}

export default connect(mapStateToProprs, {})(Component)