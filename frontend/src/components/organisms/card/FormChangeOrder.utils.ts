import * as yup from 'yup'

export interface SchemeFormChangeStatusOrder {
  id: string
  status: string
}

export const defaultValues = {
  id: '',
  status: '',
}

export const validationSchema = yup.object({
  id: yup.string(),
  status: yup.string().required('O campo de status é obrigatório'),
})
