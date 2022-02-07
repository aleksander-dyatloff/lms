import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'

import authorizedUser from './authorizedUser'

const store = configureStore({ reducer: { authorizedUser } })

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>

export default store
