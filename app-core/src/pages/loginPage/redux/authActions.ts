import {
  ADD_LOGIN_SUCCESS,
  ADD_LOGIN_FAIL,
  ADD_LOGIN_ISALREADYLOGGED,
  UserActionsTypes,
  ADD_LOGIN_RESETPASSWORD,
  UPDATE_THEME,
} from './authType'

import { ForgotPasswordModel } from '../models/forgotPasswordModel'
import { ConfigModel } from '../../../models/usuario/configModel'
import { UserModel } from 'shared-models'

export const addLoggedUser = (
  user: UserModel | undefined,
): UserActionsTypes => ({
  type: ADD_LOGIN_SUCCESS,
  payload: user,
})

export const addUnLoggedUser = (
  user: UserModel | undefined,
): UserActionsTypes => ({
  type: ADD_LOGIN_FAIL,
  payload: user,
})

export const addIsAlreadyLogged = (
  user: UserModel | undefined,
): UserActionsTypes => ({
  type: ADD_LOGIN_ISALREADYLOGGED,
  payload: user,
})

export const addRestablecerContraseña = (
  user: ForgotPasswordModel | undefined,
): UserActionsTypes => ({
  type: ADD_LOGIN_RESETPASSWORD,
  payload: user,
})

export const addUpdateTheme = (
  user: ConfigModel | undefined,
): UserActionsTypes => ({
  type: UPDATE_THEME,
  payload: user,
})
