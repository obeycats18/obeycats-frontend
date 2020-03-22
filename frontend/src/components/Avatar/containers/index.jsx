import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import {Avatar} from '../index'
import {setCredentials} from 'redux/reducers/users'

const mapStateToProps = ({users}) => {
    return {
        credentials: users.credentials
    }
} 

export default connect( mapStateToProps, {setCredentials} ) ( props => {
    
    const {credentials, setCredentials} = props

    useEffect( () => {
        if(!credentials){
            setCredentials()
        }
    }, [credentials, setCredentials])
    
    return <Avatar credentials={props.credentials}/>
} )
