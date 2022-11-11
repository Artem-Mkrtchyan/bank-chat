import { combineReducers, configureStore } from "@reduxjs/toolkit";
import auth from './slices/authSlice'

const rootReducer = combineReducers({
  auth: auth
})

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type  AppDispatch = typeof store.dispatch
