'use client'
import Button from '@/components/atoms/Button/Button'
import { Select } from '@/components/atoms/Select'
import Typograph from '@/components/atoms/Typograph/Typograph'
import { dashboard } from '@/constants/dashboard'
import { useDispacthOrder } from '@/hooks/orderDispatch'
import useOutsideClick from '@/hooks/outsideClick'
import { type Order } from '@/store/slices/order/orderSlice'
import { MapPin, User } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { SchemeFormChangeStatusOrder } from './FormChangeOrder.utils'

enum Status {
  CANCELED = 'Cancelado',
  AWAIT_PAYMENT = 'Aguardando Pagamento',
  PROCESSING = 'Em Processamento',
  SENT = 'Enviado',
  DELIVERED = 'Entregue',
}
interface CardProps {
  show: boolean
  order: Order | null
  ousideCallback?: () => void
  closeCard: () => void
}

const Card = ({ show, closeCard, order, ousideCallback }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)

  const { setValue, handleSubmit, reset, watch } =
    useForm<SchemeFormChangeStatusOrder>()

  const { updateOrder } = useDispacthOrder()

  useEffect(() => {
    if (order) {
      setValue('id', order.id)
      setValue('status', order.status)
    }
    return () => {
      reset({
        id: '',
        status: '',
      })
    }
  }, [order])

  useOutsideClick(cardRef, () => {
    ousideCallback?.()
  })
  if (!show) {
    return null
  }

  const handleUpdate = async (formvalues: SchemeFormChangeStatusOrder) => {
    formvalues.id = order?.id ?? ''
    await updateOrder(formvalues)
    toast(dashboard.messageStatusChange, {
      type: 'success',
      icon: false,
      hideProgressBar: true,
      closeButton: false,
      closeOnClick: true,
      autoClose: 1000,
    })
    closeCard()
  }

  return (
    <div className="flex absolute w-screen h-screen justify-center items-center">
      <div className="w-screen justify-center items-center h-screen flex absolute z- bg-black opacity-30"></div>
      ;
      <div
        ref={cardRef}
        className="w-[30%] flex flex-col relative bg-white z-20 rounded-md p-4 gap-4 max-sm:w-[80%]"
      >
        <Typograph className="self-center text-xl ">
          {dashboard.changeStatusTitle}
        </Typograph>

        <div className="flex gap-2 text-purple-950">
          <User />
          <Typograph>{order?.client_name}</Typograph>
        </div>

        <div className="flex gap-2 text-purple-950">
          <MapPin />
          <Typograph>{order?.address}</Typograph>
        </div>

        <Select.Root
          value={watch('status')}
          placeholder="selection"
          label={dashboard.labelStatus}
        >
          <Select.Option
            isSelected={watch('status') === Status.CANCELED}
            onClick={() => setValue('status', Status.CANCELED)}
            value={Status.CANCELED}
          />
          <Select.Option
            isSelected={watch('status') === Status.AWAIT_PAYMENT}
            onClick={() => setValue('status', Status.AWAIT_PAYMENT)}
            value={Status.AWAIT_PAYMENT}
          />
          <Select.Option
            isSelected={watch('status') === Status.PROCESSING}
            onClick={() => setValue('status', Status.PROCESSING)}
            value={Status.PROCESSING}
          />
          <Select.Option
            isSelected={watch('status') === Status.SENT}
            onClick={() => setValue('status', Status.SENT)}
            value={Status.SENT}
          />
          <Select.Option
            isSelected={watch('status') === Status.DELIVERED}
            onClick={() => setValue('status', Status.DELIVERED)}
            value={Status.DELIVERED}
          />
        </Select.Root>

        <div>
          <Button
            style={{ marginTop: 0 }}
            onClick={handleSubmit(handleUpdate)}
            theme="secondary"
          >
            {dashboard.saveTitle}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
