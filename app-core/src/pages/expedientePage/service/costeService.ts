import axios from 'axios'
import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import { UserModel } from 'shared-models'
import {
  CosteCampoDatoGridModel,
  CosteCampoDatoModel,
} from '../models/coste/expedienteCosteModel'
import { authHeader } from '../../loginPage/service/authService'
//import { checkStatusCode } from 'shared-utils'
import {
  checkStatusCode,
  NotifyType,
  showToast,
} from '../../../utils/sharedUitls'

export const getDetalleCoste = async (
  expedienteId: number,
  user: UserModel,
): Promise<CosteCampoDatoModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let url = `${process.env.REACT_APP_API_URL_CORE}/Coste/GetDetalleByExpediente/${expedienteId}`
    let coste: CosteCampoDatoModel = new CosteCampoDatoModel()
    await axios({
      url: url,
      method: 'GET',
      headers: authHeader(user!),
    })
      .then((response) => {
        checkStatusCode(response.status)
        coste = jsonConvert.deserializeObject(
          response.data,
          CosteCampoDatoModel,
        )
      })
      .catch((error) => {
        showToast('No se han podido cargar los costes', NotifyType.error, 5000)
      })

    return coste
  } catch (err) {
    // Handle Error Here
    console.error(err)
  }
}

export const getCostes = async (
  expedienteId: number,
  user: UserModel,
): Promise<CosteCampoDatoGridModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let url = `${process.env.REACT_APP_API_URL_CORE}/Coste/getCostesByExpediente/${expedienteId}`
    let costes: CosteCampoDatoGridModel = new CosteCampoDatoGridModel()
    await axios({
      url: url,
      method: 'GET',
      headers: authHeader(user!),
    })
      .then((response) => {
        checkStatusCode(response.status)
        costes = jsonConvert.deserializeObject(
          response.data,
          CosteCampoDatoGridModel,
        )
      })
      .catch((error) => {
        showToast('No se han podido cargar los costes', NotifyType.error, 5000)
      })

    return costes
  } catch (err) {
    // Handle Error Hereeee
    console.error(err)
  }
}
