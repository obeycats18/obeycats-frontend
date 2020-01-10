import { withFormik } from 'formik';

import PopupCreate from '../index'
import {createProject} from 'redux/reducers/projects'
import {projectSchema} from '../../validation'


export default withFormik({

    mapPropsToValues: () => ({
        name: '',
        cost: 0
    }),

    validationSchema: projectSchema,

    handleSubmit: ( values, {setSubmitting}) => {   
        createProject(values).then(() => {setSubmitting(false)})   
            
    }
}) (PopupCreate)