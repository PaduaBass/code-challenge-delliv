import { type SchemeFormRegister } from '@/components/molecules/register/FormRegister/FormRegister.utils'
import api from '@/services/api'
import { type User } from '@/store/slices/user/userSlice'

export const signInUseCase = async (
  formValues: SchemeFormRegister,
  successCallBack?: (data: User) => void,
  failureCallback?: (error: unknown) => void,
): Promise<void> => {
  try {
    const response = await api.post('/user', formValues)
    successCallBack != null && successCallBack(response.data as User)
  } catch (e) {
    failureCallback?.(e)
  }
}
