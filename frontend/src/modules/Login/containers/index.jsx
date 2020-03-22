import { withFormik } from 'formik';

import {Login} from '../index'

import {setData} from 'redux/reducers/auth'

import {compose} from 'redux'
import {connect} from 'react-redux'

import {loginSchema} from 'validations/auth'

export default compose(
    connect(null, {setData}),
    withFormik({

    mapPropsToValues: () => ({
        email: '',
        password: '',
        rememberMe: false
    }),

    validationSchema: loginSchema,

    handleSubmit: ( values, {setSubmitting, props}) => {        
        props.setData(values, props.history).then(() => setSubmitting(false) )
    }
}) )(Login)