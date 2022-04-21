import AuthAPI from '@api/auth'
import UsersAPI from '@api/users'
import Cadet from '@interfaces/Cadet'
import FetchStatus from '@interfaces/FetchStatus'
import Teacher from '@interfaces/Teacher'
import User from '@interfaces/User'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface InitialState {
  info?: User | Teacher | Cadet
  status: FetchStatus
  error?: string | null
}

const initState: InitialState = { status: FetchStatus.Idle }

export const loginUser = createAsyncThunk('authorizedUser/login', async (token: string) => {
  const userInfo = await AuthAPI.login(token)

  return userInfo
})

export const getUserInfo = createAsyncThunk('authorizedUser/getInfo', async (userId: string) => {
  const userInfo = await UsersAPI.getInfo(userId)

  return userInfo
})

const authorizedUserSlice = createSlice({
  name: 'authorizedUser',
  initialState: initState,
  reducers: {
    logoutUser(state) {
      state.info = undefined
      state.status = FetchStatus.Idle
      localStorage.removeItem('user-id')
    },
  },
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state) => {
      state.status = FetchStatus.Pending
    })

    builder.addCase(loginUser.rejected, (state, { payload: error }) => {
      state.status = FetchStatus.Rejected
      state.error = error as string
    })

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      localStorage.setItem('user-id', payload.googleId)

      state.status = FetchStatus.Fulfilled
      state.info = payload
      state.error = null
    })

    builder.addCase(getUserInfo.pending, (state) => {
      state.status = FetchStatus.Pending
    })

    builder.addCase(getUserInfo.rejected, (state, { payload: error }) => {
      state.status = FetchStatus.Rejected
      state.error = error as string
    })

    builder.addCase(getUserInfo.fulfilled, (state, { payload }) => {
      state.status = FetchStatus.Fulfilled
      state.info = payload
      state.error = null
    })
  },
})

export const { logoutUser } = authorizedUserSlice.actions

export default authorizedUserSlice.reducer
