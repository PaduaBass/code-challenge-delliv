import { createSlice } from '@reduxjs/toolkit'

export interface Order {
  id: string
  client_name: string
  address: string
  status: string
}

export interface OrderState {
  orders: Order[]
  error: boolean
  isLoading: boolean
}

const initialState: OrderState = {
  orders: [],
  error: false,
  isLoading: true,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    GET_ORDERS: (state, action) => ({
      ...state,
      isLoading: true,
      error: false,
    }),
    SET_ORDERS: (state, action) => ({
      ...state,
      orders: action.payload,
      error: false,
      isLoading: false,
    }),
    FAILURE_GET_ORDERS: (state, action) => ({
      ...state,
      isLoading: false,
      error: true,
    }),
  },
})

const { actions, reducer } = orderSlice

export const selectOrderState = (state: { order: OrderState }) => state

export const { SET_ORDERS, FAILURE_GET_ORDERS, GET_ORDERS } = actions

export default reducer
