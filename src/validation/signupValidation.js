import * as yup from 'yup';

export const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
        .string().min(8)
        .matches(/[a-z]/, 'password should contain at least one small letter')
        .matches(/[A-Z]/, 'password should contain at least one capital letter')
        .matches(/\d/, 'password should contain at least one number')
        .matches((/[^A-Za-z0-9]/), 'password should contain at least one special characters')
        .required(),
    password2: yup.mixed().oneOf([yup.ref('password')], "passwords don't match!").required(),
    selected: yup.mixed().oneOf([true], 'you must agree to terms & conditions').required()
});