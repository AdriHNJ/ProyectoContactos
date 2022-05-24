import axios from 'axios'
import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import { UserModel } from 'shared-models'
import { authHeader } from '../../loginPage/service/authService'
import { checkStatusCode } from 'shared-utils'
import { NotifyType, showToast } from '../../../utils/sharedUitls'
import { DocumentoCampoDatoModel } from '../models/documento/documentoModel'

export const getDocumentoByExpediente = async (
  expedienteId: number,
  user: UserModel,
): Promise<DocumentoCampoDatoModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let url = `${process.env.REACT_APP_API_URL_CORE}/Documento/getByExpediente/${expedienteId}`
    let documentoGrid: DocumentoCampoDatoModel = new DocumentoCampoDatoModel()
    await axios({
      url: url,
      method: 'GET',
      headers: authHeader(user!),
    })
      .then((response) => {
        checkStatusCode(response.status)
        documentoGrid = jsonConvert.deserializeObject(
          response.data,
          DocumentoCampoDatoModel,
        )
      })
      .catch((error) => {
        showToast(
          'No se han podido obtener los documentos',
          NotifyType.error,
          5000,
        )
      })

    return documentoGrid
  } catch (err) {
    // Handle Error Here
    console.error(err)
  }
}
