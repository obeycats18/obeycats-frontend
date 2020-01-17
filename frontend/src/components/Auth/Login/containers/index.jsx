import { withFormik } from 'formik';

import {LoginForm} from '../index'

import {setData} from 'redux/reducers/auth'

import {compose} from 'redux'
import {connect} from 'react-redux'

import {loginSchema} from 'components/Auth/validation'

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
}) )(LoginForm)