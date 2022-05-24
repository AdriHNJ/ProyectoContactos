import axios from 'axios'
import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import jwt_decode from 'jwt-decode'

import { ForgotPasswordModel, UserModel } from 'shared-models'
import { NotifyType, showToast } from '../../../utils/sharedUitls'

const serviceName = 'authService'
export const LoginUser = async (
  username: string,
  password: string,
): Promise<UserModel | undefined> => {
  /*  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let OldUrl = `https://portaldespachosapi-desarrollo.azurewebsites.net/api/Usuarios/authenticate`

    let url = `${process.env.REACT_APP_API_URL_CORE}/Account/login`
    let user
    let response = {}
    const headers = {
      Authorization: 'Bearer my-token',
      'My-Custom-Header': 'foobar',
    }

    await axios
      .post(
        url,
        {
          Username: username,
          Password: password,
        },
        { headers },
      )
      .then(async (response) => {
        checkStatusCode(response.status)
        user = decodeToken(response.data['access_token'])
        customLog(
          `Usuario logueado ${response.data.Id}`,
          logType.INFO,
          serviceName,
          LoginUser.name,
          methodsEndPointType.POST,
        )
        showToast('Usuario creado', NotifyType.success, 5000)
        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch((error) => {
        showToast(error.response.data, NotifyType.error, 5000)
        customLog(
          `Error loguin usuario  => ${error.message}`,
          logType.ERROR,
          serviceName,
          LoginUser.name,
          methodsEndPointType.PUT,
        )
      })

    return user
  } catch (err: any) {
    // Handle Error Here
    customLog(
      err[`message`],
      logType.ERROR,
      serviceName,
      LoginUser.name,
      methodsEndPointType.GET,
    )
    console.error(err)
  } */
  return undefined
}

export const RecuperarContraseña = async (
  usuario: string,
): Promise<ForgotPasswordModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    const response = await axios.get(
      `https://portaldespachosapi-desarrollo.azurewebsites.net/api/Usuarios/forgotpassword/` +
        usuario,
    )

    let forgotPassword: ForgotPasswordModel = jsonConvert.deserializeObject(
      response.data,
      ForgotPasswordModel,
    )

    if (response.statusText == 'OK' && response.status == 200) {
      //dispatch(usuarioState.isLoggedIn = true);
      //localStorage.setItem("forgotPassword", JSON.stringify(response.data));
    }

    return forgotPassword
  } catch (err) {
    // Handle Error Here
    //showToast("No puede cambiar la contraseña, ", NotifyType.error, 5000);
    console.log(err)
    console.error(err)
  }
}

export const RestorePassword = async (
  username: string,
): Promise<UserModel | undefined> => {
  /*   try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL
    let url = `${process.env.REACT_APP_API_URL_CORE}/Account/forgotPassword`
    // let response
    let response: any
    const headers = {
      Authorization: 'Bearer ',
      'My-Custom-Header': 'foobar',
    }

    response = await axios
      .post(
        url,
        {
          Username: username,
        },
        { headers },
      )
      .then(async (response) => {
        showToast(
          'Se le ha enviado un correo con los pasos para poder recuperar su contraseña.',
          NotifyType.success,
          5000,
        )
        //        localStorage.setItem('user', JSON.stringify(user))
      })
      .catch((error) => {
        showToast(
          'No tiene permisos para recuperar la contraseña, pongase en contacto con su gestoría',
          NotifyType.info,
          5000,
        )
      })

    return response
  } catch (err: any) {
    // Handle Error Here
    customLog(
      err[`message`],
      logType.ERROR,
      serviceName,
      LoginUser.name,
      methodsEndPointType.GET,
    )
    console.error(err)
  } */
  return undefined
}

export const EnviarMailResetPasswd = async (
  contraseña: string,
  repetirContraseña: string,
): Promise<UserModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let url = `https://portaldespachosapi-desarrollo.azurewebsites.net/api/Usuarios/authenticate`
    const response = await axios.post(url, { contraseña, repetirContraseña })

    let User: UserModel = jsonConvert.deserializeObject(
      response.data,
      UserModel,
    )

    if (response.statusText == 'OK' && response.status == 200) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
    return User
  } catch (err) {
    // Handle Error Here
    showToast(
      'No existe el usuario o la contaseña no coincide',
      NotifyType.error,
      5000,
    )

    console.error(err)
  }
}

export const restablecerContraseñaCall = async (
  Username: string,
  Email: string,
  Code: string,
) => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    const changePasswd = { Username: Username, Email: Email, Code: Code }
    let url = `${process.env.REACT_APP_API_URL_CORE}/Account/ResetPassword`
    const response = await axios.post(url, changePasswd)

    if (response.statusText == 'OK' && response.status == 200) {
      showToast('Email enviado correctamente', NotifyType.success, 5000)
    }

    return response.statusText
  } catch (err) {
    // Handle Error Here
    showToast(
      'No hemos podido enviar el Email, pruebe de nuevo.',
      NotifyType.error,
      5000,
    )
    console.log(err)
    console.error(err)
  }
}

export const CambiarContraseñaCall = async (
  username: string,
  password: string,
  code: string,
) => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL
    let url = `${process.env.REACT_APP_API_URL_CORE}/Account/ResetPassword`

    const json = JSON.stringify({
      username: username,
      password: password,
      code: decodeURIComponent(code).replace(' ', '+'),
    })

    const response = await axios.post(url, json, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (response.statusText == 'OK' && response.status == 200) {
      showToast(
        '¡Enhorabuena! su contraseña se ha cambiado correctamente',
        NotifyType.success,
        5000,
      )
    }

    return response.statusText
  } catch (err) {
    // Handle Error Here
    //showToast("No puede cambiar la contraseña, ", NotifyType.error, 5000);
    console.log(err)
    console.error(err)
  }
}

export const decodeToken = (token: string): UserModel => {
  let user: UserModel = new UserModel()
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL
    var decoded: any = jwt_decode(token)
    user = jsonConvert.deserializeObject(
      {
        ...(decoded as {}),
        Token: token,
        Expedientes:
          decoded['Expedientes'] != undefined ? decoded['Expedientes'] : [],
        Administracion:
          decoded['Administracion'] != undefined
            ? decoded['Administracion']
            : [],
        Calculadora:
          decoded['Calculadora'] != undefined ? decoded['Calculadora'] : [],
      },
      UserModel,
    )
  } catch (error) {
    console.error(error)
  }

  return user
}

//TODO arreglar esto para que sea generio o directamente coger el user de redux
export const authHeader = (user: UserModel) => {
  return {
    Authorization: 'Bearer ' + user.Token,
  }
}

//TODO arreglar esto para que sea generio o directamente coger el user de redux
export const apiUrl = () => {
  return 'https://portal2020api.azurewebsites.net/api/'
}

export default {
  LoginUser,
  authHeader,
  apiUrl,
  CambiarContraseñaCall,
}
