import { createSlice, PayloadAction } from '@reduxjs/toolkit'


type TInitialState = {
  loading: boolean
  error: string
  isAuth: boolean
  data: {}
}

const initialState: TInitialState = {
  loading: false,
  error: '',
  isAuth: false,
  data: {

  }
}


export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {

  }
})

export default authSlice.reducer
