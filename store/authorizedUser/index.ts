import AuthAPI from '@api/auth'
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

const authorizedUserSlice = createSlice({
  name: 'authorizedUser',
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginUser.pending, (state) => {
      state.status = FetchStatus.Pending
    })

    builder.addCase(loginUser.rejected, (state, { payload: error }) => {
      state.status = FetchStatus.Rejected
      state.error = error as string
    })

    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.status = FetchStatus.Fulfilled
      state.info = payload
      state.error = null
    })
  },
})

export default authorizedUserSlice.reducer
