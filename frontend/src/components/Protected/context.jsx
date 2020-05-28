import React from 'react'
import {connect} from 'react-redux'

const mapStateToProprs = ({auth}) => {
    return {
        user: auth.credentials
    }
}

export default connect(mapStateToProprs)( ({user, children}) => {
    return (
        children
    )
} )