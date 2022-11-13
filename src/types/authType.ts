export type TInitialState = {
  loading: boolean
  isAuth: boolean
  storageName: string
  error: {
    Error: string
    ErrorMessageText: string
  }
  data: TLoginRes
}

export type TLoginReq = {
  login: string
  password: string
}

export type TLoginRes = {
  userId: number | null
  login: string
  role: "CLIENT" | "OPERATOR"
  jwtToken: string
}

export type TErrRes = {
  response: {
    data: {
      Error: Array<TError>
    }
  }
}

export type TError = {
  Error: string
  ErrorMessageText: string
}
