import axios from 'axios'
import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import {
  /* checkStatusCode, */
  isNotEmpty,
  logType,
  methodsEndPointType,
} from 'shared-utils'
import { ExpedienteTableModel } from '../models/expedienteTableModel'
import { UserModel } from 'shared-models'
import { logger } from 'login-service'
import { customLog } from 'shared-utils'
import { authHeader } from '../../loginPage/service/authService'
import { NotifyType, showToast } from '../../../utils/sharedUitls'
import {
  ExpedienteCampoDatoModel,
  ExpedienteGridCampoDatoModel,
} from '../models/ExpedienteCampoDatoModel'

const serviceName = 'ExpedienteService'

export async function getStructure(
  user: UserModel,
): Promise<ExpedienteGridCampoDatoModel> {
  let jsonConvert: JsonConvert = new JsonConvert()
  jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL
  let url = `${process.env.REACT_APP_API_URL_CORE}/Expedientes/GetStructure`

  let expediente: ExpedienteGridCampoDatoModel =
    new ExpedienteGridCampoDatoModel()
  await axios({
    url: url,
    method: methodsEndPointType.GET,
    headers: authHeader(user),
  })
    .then((response) => {
      checkStatusCode(response.status)
      expediente = jsonConvert.deserializeObject(
        response.data,
        ExpedienteGridCampoDatoModel,
      )
    })
    .catch((error) => {
      customLog(
        null,
        logType.ERROR,
        serviceName,
        getStructure.name,
        methodsEndPointType.GET,
      )
      checkStatusCode(error.request.status)
      return {}
    })

  return expediente
}

export const getAll = async (
  user: UserModel,
): Promise<ExpedienteTableModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let url = `${process.env.REACT_APP_API_URL}/Expedientes`
    let ExpedienteTable: ExpedienteTableModel = new ExpedienteTableModel()
    await axios({
      url: url,
      method: 'GET',
      headers: authHeader(user!),
    })
      .then((response) => {
        checkStatusCode(response.status)
        ExpedienteTable = jsonConvert.deserializeObject(
          response.data,
          ExpedienteTableModel,
        )
      })
      .catch((error) => {
        showToast(
          'No se han podido cargar los expendientes',
          NotifyType.error,
          5000,
        )
      })

    return ExpedienteTable
  } catch (err) {
    // Handle Error Here
    console.error(err)
  }
}

export const getExpediente = async (
  expedienteId: number,
  user: UserModel,
): Promise<ExpedienteCampoDatoModel | undefined> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL

    let url = `${process.env.REACT_APP_API_URL_CORE}/Expedientes/GetDetalle/${expedienteId}`
    let Expediente: ExpedienteCampoDatoModel = new ExpedienteCampoDatoModel()
    await axios({
      url: url,
      method: methodsEndPointType.GET,
      headers: authHeader(user),
    })
      .then((response) => {
        checkStatusCode(response.status)
        Expediente = jsonConvert.deserializeObject(
          response.data,
          ExpedienteCampoDatoModel,
        )
      })
      .catch((error) => {
        customLog(
          null,
          logType.ERROR,
          serviceName,
          getExpediente.name,
          methodsEndPointType.GET,
        )
        return undefined
      })

    return Expediente
  } catch (err) {
    // Handle Error Here
    logger.error('', {
      component: getExpediente.name,
    })
    return undefined
  }
}

export const getCampos = async (user: UserModel): Promise<any> => {
  try {
    let jsonConvert: JsonConvert = new JsonConvert()
    jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL
    let url = `${process.env.REACT_APP_API_URL}/Expedientes/Header`
    let ExpedienteTable: ExpedienteTableModel = new ExpedienteTableModel()
    user.Token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjMwQHJ1YW5vLmNvbSIsIm5iZiI6MTYyNzQ2NDg2NSwiZXhwIjoxNjU5MDAwODY1LCJpYXQiOjE2Mjc0NjQ4NjV9.jkAjvFYZIXyFDY9cjq1zP2M8HAts70kEY1u9qrHrD9s'
    await axios({
      url: url,
      method: methodsEndPointType.GET,
      headers: authHeader(user),
    })
      .then((response) => {
        checkStatusCode(response.status)
        ExpedienteTable = jsonConvert.deserializeObject(
          response.data,
          ExpedienteTableModel,
        )
        logger.info(`front.endpoint.get.expedientes.${getCampos.name}.format`, {
          component: getCampos.name,
        })
      })
      .catch((error) => {
        logger.error('front.endpoint.get.expedientes.getCamposfromdb.format', {
          component: getCampos.name,
        })
      })

    return ExpedienteTable
  } catch (error) {
    logger.error('front.endpoint.get.expedientes.getCampos.format', {
      component: getCampos.name,
    })

    return undefined
  }
}

export const loadStore = (user: UserModel): any => {
  return function (loadOptions: any) {
    let params = '?'
    ;[
      'skip',
      'take',
      'requireTotalCount',
      //"requireGroupCount",
      'sort',
      'filter',
      'totalSummary',
      'group',
      //"groupSummary",
    ].forEach(function (i) {
      if (i in loadOptions && isNotEmpty(loadOptions[i])) {
        params += `${i}=${JSON.stringify(loadOptions[i])}&`
      }
    })
    params = params.slice(0, -1)
    let url = ''
    if (params.includes('group')) {
      url = `${process.env.REACT_APP_API_URL}/Expedientes/FilterGroup/${params}`
    } else url = `${process.env.REACT_APP_API_URL}/Expedientes/${params}`
    return fetch(url, {
      method: methodsEndPointType.GET,
      headers: authHeader(user),
    })
      .then((response) => {
        checkStatusCode(response.status)
        return response.json()
      })
      .then((data) => {
        if (data.Datos != null) {
          return {
            data: data.Datos,
            totalCount: data.totalCount,
            summary: data.summary,
            //groupCount: data.groupCount,
          }
        }
        logger.info('front.endpoint.get.expedientes.loadStorefromdb.format', {
          component: loadStore.name,
        })
      })
      .catch((err) => {
        logger.error('front.endpoint.get.expedientes.loadStore.format', {
          component: loadStore.name,
        })
      })
  }
}

export const getExpedienteFile = async (
  id: number,
  fileName: string,
  user: UserModel,
): Promise<any> => {
  try {
    let url = `${process.env.REACT_APP_API_URL_CORE}/documento/file/${id}`
    //let url = `${process.env.REACT_APP_API_URL}/documento?filename=${fileName}`
    //let url = `https://portal2020api.azurewebsites.net/api/documento?filename=EX_FIS40_45_B04186068_FACTURA DE CLIENTE_x.pdf`;
    axios({
      url: url,
      method: methodsEndPointType.GET,
      headers: authHeader(user),
      responseType: 'blob', // important
    })
      .then((response) => {
        checkStatusCode(response.status)
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        logger.info('front.endpoint.get.expedientes.getExpedienteFile.format', {
          component: getCampos.name,
        })
      })
      .catch((error) => {
        logger.error(
          'front.endpoint.get.expedientes.getExpedienteFilefromdb.format',
          {
            component: getExpedienteFile.name,
          },
        )
        showToast(
          'El archivo no existe o ya no está disponible',
          NotifyType.error,
          5000,
        )
        //console.log(error);
      })
  } catch (err) {
    logger.error('front.endpoint.get.expedientes.getExpedienteFile.format', {
      component: getExpedienteFile.name,
    })
  }
}

function checkStatusCode(code: number) {
  if (code == 401) {
    localStorage['recordarUsuario'] = 'false'
    // localStorage.removeItem("recordarUsuario");
    localStorage.removeItem('user')
    localStorage.removeItem('storage')
    window.location.reload()
  }
}
