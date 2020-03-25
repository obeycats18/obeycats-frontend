import React from 'react'

import {connect} from 'react-redux'

import { CredentialProvider } from "react-rbac-guard";
import {Client} from 'hoc/RBAC/Guards' 


import {Button} from 'components'

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
            <Client>
                <Button text='Связаться с разработчиком' classname='button-contact'></Button>
            </Client>
        </CredentialProvider>
        
    )
}

const mapStateToProprs = ({users}) => {
    return {
        credentials: users.credentials
    }
}

export default connect(mapStateToProprs, {})(Component)