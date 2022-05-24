import { UserModel } from 'shared-models'

import { modulos } from './allowModuloUtil'
import { rolesName } from './sharedUitls'

export enum modulosClaims {
  EDIT = 'Edit',
  CREATE = 'Create',
  READ = 'Read',
  VIEW = 'View',
  DELETE = 'Delete',
  ALL = 'All',
}

/* export function isRolAllowed(
  user: UserModel,
  modulo: modulos,
  claims: modulosClaims[],
): Boolean {
  if (user.Administracion.length > 0) {
    return true
    //return hasClaims(user.Administracion, claims)
  } else {
    switch (modulo) {
      case modulos.ADMINISTRACION:
        if (user.Administracion.length > 0) {
          return true
          //return hasClaims(user.Administracion, claims)
        }
        break
      case modulos.EXPEDIENTES:
        if (user.Expedientes.length > 0) {
          return hasClaims(user.Expedientes, claims)
        }
        break

      default:
        return false
    }
    return false
  }
}

export function isSuperAdministrador(user: UserModel) {
  if (user.role == rolesName.SUPERADMINISTRADOR) {
    return true
  }
  return false
}
export function isAdministrador(user: UserModel) {
  if (user.role == rolesName.ADMINISTRADOR) {
    return true
  }
  return false
}
export function isNormalUser(user: UserModel) {
  if (
    user.role == rolesName.EMPLEADO ||
    user.role == rolesName.CLIENTE ||
    user.role == rolesName.TRANSMITENTE ||
    user.role == rolesName.COLABORADOR ||
    user.role
      .split(',')
      .find(
        (x) =>
          x == rolesName.CLIENTE ||
          x == rolesName.TRANSMITENTE ||
          x == rolesName.COLABORADOR,
      )
  ) {
    return true
  }
  return false
} */

/* export function isNormalUserByIdRole(user: UsuarioModel) {
  if (user) {
    if (user.IdRole == 1 || user.IdRole == 2) {
      return false
    }
  }

  return true
} */

export function hasClaims(
  moduloClaims: string[],
  permisos: modulosClaims[],
): Boolean {
  const array = Object.values(permisos) as string[]
  moduloClaims = moduloClaims.filter((x, i, a) => a.indexOf(x) == i)
  if (array.length == moduloClaims.filter((x) => array.includes(x)).length)
    return true
  return false
}
