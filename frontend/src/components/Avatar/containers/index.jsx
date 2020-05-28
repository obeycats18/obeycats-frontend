import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import Avatar from '../index'
import {setCredentials} from 'redux/reducers/users'

const mapStateToProps = ({users}) => {
    return {
        credentials: users.credentials
    }
} 

export default connect( mapStateToProps, {setCredentials} ) ( props => {
    
    const {credentials, data, setCredentials, type} = props

    if(type === 'me'){
        useEffect( () => {
            if(!credentials){
                setCredentials()
            }
        }, [credentials, setCredentials])
        return <Avatar data={props.credentials}/>
    }else{
        return <Avatar data={data}/>
    }
    
   
} )
