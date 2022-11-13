import { TInitialState, TLoginRes, TError } from './../../types/authType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState: TInitialState = {
  loading: false,
  isAuth: false,
  storageName: 'userData',
  error: {
    Error: '',
    ErrorMessageText: ''
  },
  data: {
    userId: null,
    jwtToken: '',
    login: '',
    role: 'CLIENT'
  }
}


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    fetching(state) {
      state.loading = true
    },
    setUserData(state, action: PayloadAction<TLoginRes>) {
      state.loading = false
      state.isAuth = true
      state.data = action.payload
    },
    setError(state, action: PayloadAction<TError>) {
      state.error = action.payload
    }
  }
})

export default authSlice.reducer
