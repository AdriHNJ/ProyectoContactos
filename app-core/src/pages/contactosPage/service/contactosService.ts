import axios from 'axios'
import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import jwt_decode from 'jwt-decode'

import { ForgotPasswordModel, UserModel } from 'shared-models'
import { NotifyType, showToast } from '../../../utils/sharedUitls'

const serviceName = 'authService'

export const getContactos = async (
  usuario: string,
) => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    const response = await axios.get(
      `http://localhost:5000/contactos`,
    )
    //console.log(response)

    if (response.statusText == 'OK' && response.status == 200) {
      //dispatch(usuarioState.isLoggedIn = true);
      //localStorage.setItem("forgotPassword", JSON.stringify(response.data));
    }

    return response
  } catch (err) {
    // Handle Error Here
  showToast("No se han podido recibir los datos, pruebe de nuevo...", NotifyType.error, 5000);
    console.log(err)
    console.error(err)
  }
}
export default {
getContactos,

}
