import * as yup from 'yup'

export let projectSchema = yup.object().shape( {
    name: 
        yup.string()
            .required('Введите название'), 
    cost: 
        yup.number()
            .required('Введите ценy')
            .positive('Число не может быть отрицательным')
            .typeError('Некоректное число'),
    // dateToFinish: 
    //     yup.date()
    //         .required('Выберите дату')
} )