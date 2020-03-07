import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import Header from '../index'
import {setCredentials} from 'redux/reducers/users'

const mapStateToProps = ({users}) => {
    return {
        credentials: users.credentials
    }
} 

export default connect( mapStateToProps, {setCredentials} ) ( props => {
    
    console.log(props)

    useEffect( () => {
        props.setCredentials()
    }, [])
    
    return <Header credentials={props.credentials}/>
} )
