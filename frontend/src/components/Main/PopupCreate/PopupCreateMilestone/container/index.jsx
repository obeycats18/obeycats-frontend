import { withFormik } from 'formik';

import PopupCreateMilestone from '../index'
import {createProject} from 'redux/reducers/projects'
import {projectSchema} from '../validation'


export default withFormik({

    mapPropsToValues: () => ({
        name: '',
        isNoReturn: false
    }),

    validationSchema: projectSchema,

    handleSubmit: ( values, {setSubmitting}) => {   
        createProject(values).then(() => {setSubmitting(false)})   
            
    }
}) (PopupCreateMilestone)