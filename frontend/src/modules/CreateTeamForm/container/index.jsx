import React, { useEffect }  from 'react' 

import CreateForm from '../index'

import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {withFormik} from 'formik'

import {fetchUsers} from 'redux/reducers/users'
import {createTeam} from 'redux/reducers/teams'



const mapStateToProps = ({users}) => {
    return {
        users: users.users, 
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        fetchUsers,
        createTeam
    }),
    withFormik({

        handleSubmit: ( values, {setSubmitting, props}) => {
            console.log(values)
            const requestData = {
                name: values.name,
                members: values.members
            }
            props.createTeam(requestData).then( () => {
                props.setModalVisible(false)
                setSubmitting(false)
            })
        }
    })
    
)( (props) => {

    useEffect(() => {
        props.fetchUsers()
    }, [fetchUsers, props.users.lenght])
    return (
        <CreateForm {...props}/>
    )
})