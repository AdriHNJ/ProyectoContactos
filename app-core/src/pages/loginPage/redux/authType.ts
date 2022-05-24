import { UserModel } from 'shared-models'
import { ConfigModel } from '../../../models/usuario/configModel'
import { ForgotPasswordModel } from '../models/forgotPasswordModel'

export interface UserState {
  user: UserModel | undefined
  isLoggedIn: Boolean
}

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAIL = 'REGISTER_FAIL'
export const ADD_LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const ADD_LOGIN_FAIL = 'LOGIN_FAIL'
export const ADD_LOGIN_ISALREADYLOGGED = 'LOGIN_ISALREADYLOGGED'
export const LOGOUT = 'LOGOUT'
export const SET_MESSAGE_LOGGIN = 'SET_MESSAGE_LOGGIN'
export const CLEAR_MESSAGE = 'CLEAR_MESSAGE'
export const USER_CONFIG = 'USER_CONFIG'
export const ADD_LOGIN_RESETPASSWORD = 'LOGIN_RESETPASSWORD'
export const UPDATE_THEME = 'UPDATE_THEME'

interface AddUserLoggedRequest {
  type: typeof ADD_LOGIN_SUCCESS
  payload: UserModel | undefined
}
interface AddUserLoggedFailRequest {
  type: typeof ADD_LOGIN_FAIL
  payload: UserModel | undefined
}

interface AddUserIsAlreadyLoggedRequest {
  type: typeof ADD_LOGIN_ISALREADYLOGGED
  payload: UserModel | undefined
}
interface AddUserResetPassword {
  type: typeof ADD_LOGIN_RESETPASSWORD
  payload: ForgotPasswordModel | undefined
}
interface AddUpdateThemeRequest {
  type: typeof UPDATE_THEME
  payload: ConfigModel | undefined
}

export type UserActionsTypes =
  | AddUserLoggedRequest
  | AddUserLoggedFailRequest
  | AddUserIsAlreadyLoggedRequest
  | AddUserResetPassword
  | AddUpdateThemeRequest
