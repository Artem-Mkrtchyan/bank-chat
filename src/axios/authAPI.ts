import { TLoginReq, TLoginRes } from '../types/authType';
import axios from "axios";

export const instansAxios = axios.create({
  baseURL: 'https://hack.invest-open.ru/',
})


export const authAPI = {
  // registerUser(data: ) {
  //   return instansAxios.post<>(`auth`, data)
  // },
  loginUser(data: TLoginReq) {
    return instansAxios.post<TLoginRes>(`auth`, data)
  }
}
