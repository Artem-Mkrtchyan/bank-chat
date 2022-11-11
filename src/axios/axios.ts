import axios from "axios";

export const instansAxios = axios.create({
  baseURL: 'https://reqres.in/api/',
})

