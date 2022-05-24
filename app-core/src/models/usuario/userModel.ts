import { JsonObject, JsonProperty } from 'json2typescript'
import { ConfigModel } from './configModel'
import { PermisosModel } from './permisosModel'

@JsonObject('UserModel')
export class UserModel {
  @JsonProperty('Expedientes', [String])
  Expedientes: [] = []
  @JsonProperty('Administracion', [String])
  Administracion: [] = []
  @JsonProperty('Calculadora', [String])
  Calculadora: [] = []
  @JsonProperty('Token', String)
  Token: string = ''
  @JsonProperty('UserId', String)
  UserId: string = ''
  @JsonProperty('CompanyId', String)
  CompanyId: string = ''
  @JsonProperty('SujetoId', String)
  SujetoId: string = ''
  @JsonProperty('UserName', String)
  UserName: string = ''
  @JsonProperty('CodigoCalculadora', String)
  CodigoCalculadora: string = ''
  @JsonProperty('role', String)
  role: string = ''
}

export interface RootObject {
  UserName: string
  CodigoCalculadora: number
  Token: string
  Rol: string
  Permisos: Permisos
  Configuracion: Configuracion
}

export interface Permisos {
  AccesoAdministracion: boolean
  ListadoUsuarios: boolean
  AccesoExpedientes: boolean
  AccesoPeticiones: boolean
  EliminarTickets: boolean
  ModificarPeticiones: boolean
  EliminarPeticiones: boolean
}

export interface Configuracion {
  Tema: string
  Logo1: string
  Logo2: string
  MensajeCentral: string
  Usuario: string
  LinkLegal: string
  LinkCookies: string
  LinkRgpd: string
}
