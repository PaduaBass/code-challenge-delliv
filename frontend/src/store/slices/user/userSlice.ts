import { createSlice } from '@reduxjs/toolkit'

export interface User {
  id: string
  name: string
  email: string
}

export interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    SET_USER: (state, action) => ({
      ...state,
      user: action.payload,
    }),
  },
})

const { actions, reducer } = userSlice

export const selectUserState = (state: { user: UserState }) => state.user

export const { SET_USER } = actions

export default reducer
