import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import { UserModel } from 'shared-models'

import { addIsAlreadyLogged } from '../../pages/loginPage/redux/authActions'

export function isAlreadyLoggedUser(url: string, history: any, dispatch: any) {
  if (localStorage.getItem('user')) {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let usuario: UserModel = jsonConvert.deserializeObject(
      JSON.parse(localStorage.getItem('user')!),
      UserModel,
    )
    dispatch(addIsAlreadyLogged(usuario))
    return true
  } else {
    return false
  }
}

export default {
  isAlreadyLoggedUser,
}
