import * as yup from 'yup'

export let loginSchema = yup.object().shape( {
    email: 
        yup.string()
            .email('Неверный e-mail')
            .required('Введите e-mail'),
    password: 
        yup.string()
            .required('Введите пароль')
            .label('password')
            .min(6, 'Слишком короткий пароль')
    
} )

export let registrationSchema = yup.object().shape( {
    last_name: 
        yup.string()
            .required('Введите имя'), 
    first_name: 
        yup.string()
            .required('Введите фамилию'),
    email: 
        yup.string()
            .email('Неверный e-mail')
            .required('Введите e-mail'),
    password: 
        yup.string()
            .required('Введите пароль')
            .label('password')
            .min(6, 'Слишком короткий пароль'),
    confirm_password: 
        yup.string()
            .required('Введите пароль')
            .label('password')
            .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
} )