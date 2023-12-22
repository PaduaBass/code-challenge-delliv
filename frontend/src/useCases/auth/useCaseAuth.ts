import { type SchemeFormLogin } from '@/components/molecules/login/FormLogin/FormLogin.utils'
import api, { setAuthorization } from '@/services/api'
import { type User } from '@/store/slices/user/userSlice'

export const authUseCase = async (
  formValues: SchemeFormLogin,
  successCallback?: (data: User) => void,
  failureCallback?: () => void,
): Promise<void> => {
  try {
    const response = await api.post('/auth', formValues)
    setAuthorization(response?.data?.token)
    successCallback != null && successCallback(response.data as User)
  } catch (e) {
    failureCallback?.()
  }
}
