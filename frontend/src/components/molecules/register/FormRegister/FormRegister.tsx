'use client'

import { useForm } from 'react-hook-form'
import { type SchemeFormRegister, validationSchema } from './FormRegister.utils'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '@/components/atoms/Input/Input'
import Button from '@/components/atoms/Button/Button'
import Typograph from '@/components/atoms/Typograph/Typograph'
import Link from 'next/link'
import { signInUseCase } from '@/useCases/signin/useCaseSingIn'
import { useRouter } from 'next/navigation'
import { register } from '@/constants/register'
import { ToastContainer, toast } from 'react-toastify'

const FormRegister = () => {
  const {
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemeFormRegister>({
    resolver: yupResolver(validationSchema),
  })
  const { replace } = useRouter()

  const handleLogin = (formValues: SchemeFormRegister) => {
    signInUseCase(
      formValues,
      () => {
        toast(register.successCreateUSer, {
          type: 'success',
          icon: false,
          hideProgressBar: true,
          closeButton: false,
          closeOnClick: true,
          autoClose: 1000,
        })
        setTimeout(() => {
          replace('/')
        }, 1200)
      },
      (e) => {
        toast(register.failureCreateUser, {
          type: 'error',
          icon: false,
          hideProgressBar: true,
          closeButton: false,
          closeOnClick: true,
          autoClose: 1000,
        })
      },
    )
  }
  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col"
      noValidate
    >
      <div className="flex items-center text-center justify-center w-full">
        <Typograph className="text-xl font-semibold text-white ">
          {register.titleRegister}
        </Typograph>
      </div>
      <Input
        onChange={(e) => {
          setValue('name', e.target.value)
        }}
        placeholder={register.placeholderName}
        label={register.labelName}
        type="text"
        error={errors.name?.message}
      />
      <Input
        onChange={(e) => {
          setValue('email', e.target.value)
        }}
        placeholder={register.placeholderEmail}
        label={register.labelEmail}
        type="email"
        error={errors.email?.message}
      />
      <Input
        onChange={(e) => {
          setValue('password', e.target.value)
        }}
        placeholder={register.placeholderPassword}
        label={register.labelPassword}
        type="password"
        error={errors.password?.message}
      />
      <Button type="submit">{register.titleButton}</Button>
      <Link href="/" className="self-center mt-2 text-white">
        {register.titleLinkGoBack}
      </Link>
      <ToastContainer />
    </form>
  )
}

export default FormRegister
