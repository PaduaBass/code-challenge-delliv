import { combineReducers } from '@reduxjs/toolkit'

import order from './order/orderSlice'
import user from './user/userSlice'
const rootReducer = combineReducers({
  order,
  user,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
