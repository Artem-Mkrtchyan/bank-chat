import { Registration } from './pages/Registration/Registration';
import { Login } from './pages/Login/Login';
import { LOGIN_ROUTE, REGISTRATION } from './utils/constants';

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Element: Login
  },
  {
    path: REGISTRATION,
    Element: Registration

  }
]

export const privateRoutes = [

]
