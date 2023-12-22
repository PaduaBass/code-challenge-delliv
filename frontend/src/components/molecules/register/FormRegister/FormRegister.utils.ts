import { register } from '@/constants/register'
import * as yup from 'yup'

export interface SchemeFormRegister {
  name: string
  email: string
  password: string
}

export const defaultValues = {
  name: '',
  email: '',
  password: '',
}

export const validationSchema = yup.object({
  name: yup.string().required(register.requiredName),
  email: yup
    .string()
    .required(register.requiredEmail)
    .email(register.emailFormatInvalid),
  password: yup
    .string()
    .required(register.requiredPassword)
    .min(8, register.lengthMinPassword),
})
