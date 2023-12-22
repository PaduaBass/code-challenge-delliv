import { login } from '@/constants/login'
import * as yup from 'yup'

export interface SchemeFormLogin {
  email: string
  password: string
}

export const defaultValues = {
  email: '',
  password: '',
}

export const validationSchema = yup.object({
  email: yup
    .string()
    .required(login.requiredMessageEmail)
    .email(login.emailFormatInvalid),
  password: yup
    .string()
    .required(login.requiredMessagePassword)
    .min(8, login.lengthMinPassword),
})
