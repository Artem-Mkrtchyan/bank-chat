import { RootState } from "./store"

export const selectors = {
  storageName: (state: RootState) => state.auth.storageName,
  errorMesage: (state: RootState) => state.auth.error.ErrorMessageText,
}
