'use client'

import { useForm } from 'react-hook-form'
import { type SchemeFormLogin, validationSchema } from './FormLogin.utils'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '@/components/atoms/Input/Input'
import Button from '@/components/atoms/Button/Button'
import Typograph from '@/components/atoms/Typograph/Typograph'
import Link from 'next/link'
import { authUseCase } from '@/useCases/auth/useCaseAuth'
import { redirect, useRouter } from 'next/navigation'
import { useDispacthUser } from '@/hooks/userDispatch'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectUserState } from '@/store/slices/user/userSlice'
import { login } from '@/constants/login'
const FormLogin = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors, defaultValues },
    setError,
  } = useForm<SchemeFormLogin>({
    resolver: yupResolver(validationSchema),
  })
  const { replace } = useRouter()
  const { setUser, getUserStorage } = useDispacthUser()
  const { user } = useSelector(selectUserState)
  useEffect(() => {
    if (!user) {
      getUserStorage()
    } else {
      replace('/dashboard')
    }
  }, [user])

  const handleLogin = (formValues: SchemeFormLogin) => {
    authUseCase(
      formValues,
      (data) => {
        setUser(data)
        replace('/dashboard')
      },
      () => {
        setError('password', {
          message: login.errorEmailOrPassword,
        })
      },
    )
  }
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
      <Typograph className="self-center text-xl font-semibold text-white">
        {login.loginTitle}
      </Typograph>
      <Input
        onChange={(e) => {
          setValue('email', e.target.value)
        }}
        placeholder={login.placeholderEmail}
        label="Email"
        type="email"
        defaultValue={defaultValues?.email}
        error={errors.email?.message}
      />
      <Input
        onChange={(e) => {
          setValue('password', e.target.value)
        }}
        placeholder={login.placeholderPassword}
        label="Senha"
        type="password"
        value={defaultValues?.password}
        error={errors.password?.message}
      />
      <Button type="submit">{login.titleButton}</Button>
      <Link className="self-center text-white mt-2" href="/register">
        {login.titleLinkSignUp}
      </Link>
    </form>
  )
}

export default FormLogin
