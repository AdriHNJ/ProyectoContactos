import CustomStore from 'devextreme/data/custom_store'
import { logger } from 'login-service'
import { UserModel } from 'shared-models'
import { authHeader } from 'shared-services'
import { checkStatusCode, isNotEmpty, methodsEndPointType } from 'shared-utils'

// const store: any = new CustomStore({
//   key: 'Id',
//   load: function (loadOptions: any) {
//     let params = '?'
//     ;[
//       'skip',
//       'take',
//       'requireTotalCount',
//       //"requireGroupCount",
//       'sort',
//       'filter',
//       'totalSummary',
//       //'group'
//       //"groupSummary",
//     ].forEach(function (i) {
//       if (i in loadOptions && isNotEmpty(loadOptions[i])) {
//         params += `${i}=${JSON.stringify(loadOptions[i])}&`
//       }
//     })
//     params = params.slice(0, -1)
//     if (params.includes('group')) {
//       url = `${url}/${params}`
//     } else url = `${urlAux}/${params}`
//     return fetch(url, {
//       method: 'GET',
//       headers: {
//         Authorization: 'Bearer ' + token,
//       },
//     })
//       .then((response) => {
//         //checkStatusCode(response.status)
//         return response.json()
//       })
//       .then((data) => {
//         if (data.Datos != null) {
//           return {
//             data: data.Datos,
//             totalCount: data.totalCount,
//             summary: data.summary,
//             //groupCount: data.groupCount,
//           }
//         }
//         return null
//         // logger.info('front.endpoint.get.expedientes.loadStorefromdb.format', {
//         //   component: loadStore.name
//         // })
//       })
//       .catch((err) => {
//         console.log(err)
//         // logger.error('front.endpoint.get.expedientes.loadStore.format', {
//         //   component: loadStore.name
//         // })
//       })
//   },
// })

export const loadStore = (user: UserModel, endpoint: string): any => {
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
      url = `${process.env.REACT_APP_API_URL_CORE}/${endpoint}/FilterGroup/${params}`
    } else url = `${process.env.REACT_APP_API_URL_CORE}/${endpoint}/${params}`
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
        // logger.info('front.endpoint.get.expedientes.loadStorefromdb.format', {
        //   component: loadStore.name,
        // })
      })
      .catch((err) => {
        // logger.error('front.endpoint.get.expedientes.loadStore.format', {
        //   component: loadStore.name,
        // })
      })
  }
}
