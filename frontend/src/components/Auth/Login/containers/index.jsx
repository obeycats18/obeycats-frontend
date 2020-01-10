import { withFormik } from 'formik';

import {LoginForm} from '../index'

import {setData} from 'redux/reducers/auth'
import store from 'redux/store'

import {loginSchema} from 'components/Auth/validation'

export default withFormik({

    mapPropsToValues: () => ({
        email: '',
        password: '',
        rememberMe: false
    }),

    validationSchema: loginSchema,

    handleSubmit: ( values, {setSubmitting, props}) => {        
        store.dispatch( setData(values, props.history) )
            .then(() => {setSubmitting(false)})
    }
}) (LoginForm)