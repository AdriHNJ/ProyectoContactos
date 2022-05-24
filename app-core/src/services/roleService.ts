import axios from 'axios'
import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import {
  logType,
  methodsEndPointType,
  customLog,
  checkStatusCode,
} from 'shared-utils'
import { UserModel } from 'shared-models'
import { RoleModel } from '../models/roleModel'
import { authHeader } from 'shared-services'
import { NotifyType, rolesName, showToast } from '../utils/sharedUitls'

const serviceName = 'authService'

export const getRoles = async (
  user: UserModel,
): Promise<RoleModel[] | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL
    let url = `${process.env.REACT_APP_API_URL_CORE}/Role`
    let roles: RoleModel[] = []
    await axios({
      url: url,
      method: 'GET',
      headers: authHeader(user!),
    })
      .then((response) => {
        roles = jsonConvert.deserializeArray(response.data, RoleModel)
      })
      .catch((error) => {
        customLog(
          null,
          logType.ERROR,
          serviceName,
          getRoles.name,
          methodsEndPointType.GET,
        )
        showToast(
          'No se han podido obtener los sujetos.',
          NotifyType.error,
          5000,
        )
      })
    return roles
  } catch (err) {
    // Handle Error Here
    console.error(err)
  }
}
