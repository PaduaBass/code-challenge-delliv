import { useDispatch } from 'react-redux'
import * as userSlice from '@/store/slices/user/userSlice'
import { type User } from '@/store/slices/user/userSlice'
import { setAuthorization } from '@/services/api'

export const useDispacthUser = () => {
  const dispath = useDispatch()

  const setUser = (user: User) => {
    localStorage.setItem('@user', JSON.stringify(user))
    return dispath(userSlice.SET_USER(user))
  }

  const getUserStorage = () => {
    const userStr = localStorage.getItem('@user')
    if (userStr === null) {
      return ''
    }
    const user = JSON.parse(userStr)
    setAuthorization(user?.token)
    return dispath(userSlice.SET_USER(user))
  }

  const logout = () => {
    localStorage.clear()
    return dispath(userSlice.SET_USER(null))
  }

  return {
    setUser,
    getUserStorage,
    logout,
  }
}
