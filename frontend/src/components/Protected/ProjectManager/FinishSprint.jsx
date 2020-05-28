import React from 'react'

import {connect} from 'react-redux'

import {Button} from 'components'

import { CredentialProvider } from "react-rbac-guard";
import {ProjectNanager} from 'hoc/RBAC/Guards' 


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
            <ProjectNanager>
                <Button text='Закрыть спринт' classname='button-sprint'></Button>
            </ProjectNanager>
        </CredentialProvider>
        
    )
}

const mapStateToProprs = ({users}) => {
    return {
        credentials: users.credentials
    }
}

export default connect(mapStateToProprs, {})(Component)