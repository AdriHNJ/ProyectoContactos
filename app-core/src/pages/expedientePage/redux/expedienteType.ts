import {
  CosteCampoDatoGridModel,
  CosteCampoDatoModel,
} from '../models/coste/expedienteCosteModel'
import { DocumentoCampoDatoModel } from '../models/documento/documentoModel'
import {
  ExpedienteCampoDatoModel,
  ExpedienteGridCampoDatoModel,
} from '../models/ExpedienteCampoDatoModel'
import { ExpedienteModel } from '../models/expedienteModel'
import { ExpedienteTableModel } from '../models/expedienteTableModel'
import { TareaPendienteCampoDatoModel } from '../models/tarePendiente/tareaPendienteModel'
import { VehiculoCampoDatoModel } from '../models/vehiculo/vehiculoModel'

export interface ExpedienteState {
  expedientes: ExpedienteGridCampoDatoModel | undefined
  expediente: ExpedienteCampoDatoModel | undefined
  coste: CosteCampoDatoModel | undefined
  costes: CosteCampoDatoGridModel | undefined
  vehiculo: VehiculoCampoDatoModel | undefined
  tareasPendientes: TareaPendienteCampoDatoModel | undefined
  documentos: DocumentoCampoDatoModel | undefined
}

export const ADD_EXPEDIENTES = '@todo/ADD_USERS'
export const ADD_EXPEDIENTE = '@todo/ADD_EXPEDIENTE'
export const CLEAR_EXPEDIENTE = '@todo/CLEAR_EXPEDIENTE'
export const ADD_COSTE = '@todo/ADD_COSTE'
export const ADD_COSTES = '@todo/ADD_COSTES'
export const ADD_VEHICULO = '@todo/ADD_VEHICULO'
export const ADD_TAREASPENDIENTES = '@todo/ADD_TAREASPENDIENTES'
export const ADD_DOCUMENTOS = '@todo/ADD_DOCUMENTOS'
interface AddExpedientesRequest {
  type: typeof ADD_EXPEDIENTES
  payload: ExpedienteTableModel | undefined
}
interface AddExpedienteRequest {
  type: typeof ADD_EXPEDIENTE
  payload: ExpedienteCampoDatoModel | undefined
}

interface AddCosteRequest {
  type: typeof ADD_COSTE
  payload: CosteCampoDatoModel | undefined
}

interface AddCostesRequest {
  type: typeof ADD_COSTES
  payload: CosteCampoDatoGridModel | undefined
}

interface AddTareasPendientesRequest {
  type: typeof ADD_TAREASPENDIENTES
  payload: TareaPendienteCampoDatoModel | undefined
}

interface AddDocumentosRequest {
  type: typeof ADD_DOCUMENTOS
  payload: DocumentoCampoDatoModel | undefined
}

interface AddVehiculoRequest {
  type: typeof ADD_VEHICULO
  payload: VehiculoCampoDatoModel | undefined
}
interface ClearExpedienteRequest {
  type: typeof CLEAR_EXPEDIENTE
  payload: ExpedienteModel | undefined
}

export type ExpedienteActionsTypes =
  | ClearExpedienteRequest
  | AddExpedientesRequest
  | AddExpedienteRequest
  | AddCosteRequest
  | AddVehiculoRequest
  | AddCostesRequest
  | AddTareasPendientesRequest
  | AddDocumentosRequest
