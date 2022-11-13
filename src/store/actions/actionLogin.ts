import { useAppSelector } from './../../hooks/redux';
import { TLoginReq, TErrRes, TLoginRes } from './../../types/authType';
import { authAPI } from '../../axios/authAPI'
import {authSlice} from '../slices/authSlice'
import { AppDispatch } from '../store'


export const login = (data: TLoginReq, storageName: string) => async (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.fetching())
  await authAPI.loginUser(data)
    .then(resp => {
      if(resp.status === 200) {
        dispatch(authSlice.actions.setUserData(resp.data))
        localStorage.setItem(storageName, JSON.stringify(resp.data))
      }

    })
    .catch((err: TErrRes) => dispatch(authSlice.actions.setError(err.response.data.Error[0])))
}

export const setUserData = (data: TLoginRes) => (dispatch: AppDispatch) => {
  dispatch(authSlice.actions.setUserData(data))
}
