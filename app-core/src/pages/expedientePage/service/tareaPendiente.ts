import axios from 'axios'
import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import { UserModel } from 'shared-models'
import { authHeader } from '../../loginPage/service/authService'
import { checkStatusCode } from 'shared-utils'
import { NotifyType, showToast } from '../../../utils/sharedUitls'
import { VehiculoCampoDatoModel } from '../models/vehiculo/vehiculoModel'
import { TareaPendienteCampoDatoModel } from '../models/tarePendiente/tareaPendienteModel'

export const getTareasPendientesByExpediente = async (
  expedienteId: number,
  user: UserModel,
): Promise<TareaPendienteCampoDatoModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let url = `${process.env.REACT_APP_API_URL_CORE}/TareaPendiente/getByExpediente/${expedienteId}`
    let tareaPendienteGrid: TareaPendienteCampoDatoModel =
      new TareaPendienteCampoDatoModel()
    await axios({
      url: url,
      method: 'GET',
      headers: authHeader(user!),
    })
      .then((response) => {
        checkStatusCode(response.status)
        tareaPendienteGrid = jsonConvert.deserializeObject(
          response.data,
          TareaPendienteCampoDatoModel,
        )
      })
      .catch((error) => {
        showToast(
          'No se han podido obtener los historicos',
          NotifyType.error,
          5000,
        )
      })

    return tareaPendienteGrid
  } catch (err) {
    // Handle Error Here
    console.error(err)
  }
}
