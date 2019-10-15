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

    handleSubmit: ( values, {setSubmitting}) => {
        console.log(values);
        
        store.dispatch( setData(values) )
            .then(() => {setSubmitting(false)})
    }
}) (LoginForm)