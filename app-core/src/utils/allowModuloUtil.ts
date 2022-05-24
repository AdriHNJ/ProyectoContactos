import { JsonConvert, ValueCheckingMode } from 'json2typescript'
import { UserModel } from 'shared-models'
/* import { CompanyModuloModel } from '../pages/companyAdministracionPages/companyPage/models/companyModuloModel' */

export enum modulos {
  EXPEDIENTES = 'Expedientes',
  ADMINISTRACION = 'Administracion',
  CALCULADORA = 'Calculadora',
  SUPERADMINISTRADOR = 'SupeAdministrador',
}

export function isModuloAllowed(user: UserModel, modulo: modulos): Boolean {
  let jsonConvert: JsonConvert = new JsonConvert()
  jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL
  /* 
  if (modulo == modulos.ADMINISTRACION) {
    return isRolAllowed(user, modulo, [])
  } */
  /*   if (localStorage.getItem('parentCompanyModulos') != 'undefined') {
    const modulosParent = jsonConvert.deserializeArray(
      JSON.parse(localStorage.getItem('parentCompanyModulos')!),
      CompanyModuloModel,
    )
    var findModulo = modulosParent.find((x) => x.Nombre == modulo)
    if (!findModulo) {
      return falses
    } else return true
  } else return false */
  return true
}
