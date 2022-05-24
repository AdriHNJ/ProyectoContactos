import axios from 'axios'
import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import { UserModel } from 'shared-models'
import { authHeader } from '../../loginPage/service/authService'
import { checkStatusCode } from 'shared-utils'
import { NotifyType, showToast } from '../../../utils/sharedUitls'
import { VehiculoCampoDatoModel } from '../models/vehiculo/vehiculoModel'

export const getDetalleVehiculo = async (
  vehiculoId: number,
  user: UserModel,
): Promise<VehiculoCampoDatoModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let url = `${process.env.REACT_APP_API_URL_CORE}/Vehiculos/GetDetalle/${vehiculoId}`
    let vehiculoGrid: VehiculoCampoDatoModel = new VehiculoCampoDatoModel()
    await axios({
      url: url,
      method: 'GET',
      headers: authHeader(user!),
    })
      .then((response) => {
        checkStatusCode(response.status)
        vehiculoGrid = jsonConvert.deserializeObject(
          response.data,
          VehiculoCampoDatoModel,
        )
      })
      .catch((error) => {
        showToast(
          'No se han podido cargar los vehiculos',
          NotifyType.error,
          5000,
        )
      })

    return vehiculoGrid
  } catch (err) {
    // Handle Error Here
    console.error(err)
  }
}
