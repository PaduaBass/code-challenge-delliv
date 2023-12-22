import api from '@/services/api'
import { type Order } from '@/store/slices/order/orderSlice'

export const listOrderUseCase = async (
  successCallBack?: (data: Order[]) => void,
  failureCallback?: () => void,
): Promise<void> => {
  try {
    const response = await api.get('/order')
    successCallBack != null && successCallBack(response.data as Order[])
  } catch (e) {
    failureCallback?.()
  }
}

export const changeStatusOrderUseCase = async (
  formValues: { id: string; status: string },
  successCallBack?: (data: Order) => Promise<void>,
  failureCallback?: () => void,
): Promise<void> => {
  try {
    const response = await api.post(`/order/change/${formValues.id}`, {
      status: formValues.status,
    })
    successCallBack != null && (await successCallBack(response.data as Order))
  } catch (e) {
    failureCallback?.()
  }
}
