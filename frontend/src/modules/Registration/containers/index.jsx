import {withFormik} from 'formik'

import {registrationSchema} from 'validations/auth'
import RegistrationForm from '../index'

import {createUser} from 'redux/reducers/auth'


export default withFormik({
    
    mapPropsToValues: () => ({
        last_name: '',
        first_name: '',
        email: '',
        password: '',
        confirm_password: '',
        role: ''
    }),
    
    validationSchema: registrationSchema,

    handleSubmit: ( values, {setSubmitting, props}) => {
        createUser(values, props.history).then(() => {
            setSubmitting(false)
        })
        
    }
}) (RegistrationForm)