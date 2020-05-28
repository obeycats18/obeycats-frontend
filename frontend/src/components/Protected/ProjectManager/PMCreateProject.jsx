import React from 'react'

import {connect} from 'react-redux'

import { CredentialProvider } from "react-rbac-guard";
import {ProjectNanager} from 'hoc/RBAC/Guards' 

import {CreateProjectBtn} from 'components'

const Component = (props) => {

    const {
        credentials,
        isEmpty
    } = props


    let role = ""

    if(credentials){
        role = credentials.role.name
    }
    

    return (
        <CredentialProvider value={role || {}}>
            <ProjectNanager>
                {
                    (isEmpty)
                        ? <CreateProjectBtn type='empty'/>
                        : <CreateProjectBtn />
                }
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