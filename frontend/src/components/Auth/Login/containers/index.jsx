import { withFormik } from 'formik';

import {LoginForm} from '../index'

import {setData} from 'redux/reducers/auth'
import store from 'redux/store'

export default withFormik({
    handleSubmit: ( values, {setSubmitting}) => {
        store.dispatch( setData(values))
        console.log('Okey!');
        
    }
}) (LoginForm)