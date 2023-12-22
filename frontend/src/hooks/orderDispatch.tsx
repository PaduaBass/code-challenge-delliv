import { useDispatch, useSelector } from 'react-redux'
import * as OrderSlice from '@/store/slices/order/orderSlice'
import * as UserSlice from '@/store/slices/user/userSlice'

import {
  changeStatusOrderUseCase,
  listOrderUseCase,
} from '@/useCases/order/orderUseCase'
import { useEffect } from 'react'
import { selectUserState } from '@/store/slices/user/userSlice'

export function useDispacthOrder() {
  const dispath = useDispatch()
  const { user } = useSelector(selectUserState)
  const getOrders = async () => {
    dispath(OrderSlice.FAILURE_GET_ORDERS({}))

    await listOrderUseCase(
      (data) => {
        return dispath(OrderSlice.SET_ORDERS(data))
      },
      () => {
        localStorage.clear()
        dispath(UserSlice.SET_USER(null))
        return dispath(OrderSlice.FAILURE_GET_ORDERS({}))
      },
    )
  }

  const updateOrder = async (order: { id: string; status: string }) => {
    await changeStatusOrderUseCase(
      order,
      async () => {
        await getOrders()
      },
      () => {
        dispath(UserSlice.SET_USER(null))
        return dispath(OrderSlice.FAILURE_GET_ORDERS({}))
      },
    )
  }

  useEffect(() => {
    const handleGetData = async () => {
      await getOrders()
    }
    if (user) {
      handleGetData().catch()
    }
  }, [user])

  return {
    getOrders,
    updateOrder,
  }
}
