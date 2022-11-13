import { Registration } from './pages/Registration/Registration';
import { Login } from "./pages/Login/Login";
import { LOGIN_ROUTE, PROFILE_OWNER, PROFILE_USER, REGISTRATION } from "./utils/constants";
import { UserProfile } from './pages/UserProfile/UserProfile';

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
  {
    path: PROFILE_OWNER,
    Element: UserProfile
  },
]
