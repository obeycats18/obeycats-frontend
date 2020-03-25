import * as yup from 'yup'

export let projectSchema = yup.object().shape( {
    name: 
        yup.string()
            .required('Введите название')
} )