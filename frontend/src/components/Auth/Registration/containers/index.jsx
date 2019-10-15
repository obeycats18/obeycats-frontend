import {withFormik} from 'formik'

import {reduce} from 'lodash'
import {userAPI} from 'api/userAPI'

import {registrationSchema} from 'components/Auth/validation'
import RegistrationForm from '../index'

import {createUser} from 'redux/reducers/auth'
import store from 'redux/store'

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

    handleSubmit: ( values, {setSubmitting}) => {
        // store.dispatch( setData(values))
        // console.log('here');
        
        // console.log(values); 
        let postData = reduce(values, ((result, value, key) => {
            if(key != 'confirm_password'){
                result[key] = value
            }

            return result
            
        }), {})

        return userAPI.registration( postData ).then( (data) => {   
            if(data.status === 201) {
                console.log(data);
                setSubmitting(false)
            }else{
                setSubmitting(false)
            }
            
        })
        .catch( err => {console.log(err) ; setSubmitting(false) ;
        } )
        
    }
}) (RegistrationForm)