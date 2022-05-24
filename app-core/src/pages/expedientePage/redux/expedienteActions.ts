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
import {
  ExpedienteActionsTypes,
  ADD_EXPEDIENTES,
  ADD_EXPEDIENTE,
  CLEAR_EXPEDIENTE,
  ADD_COSTE,
  ADD_VEHICULO,
  ADD_COSTES,
  ADD_TAREASPENDIENTES,
  ADD_DOCUMENTOS,
} from './expedienteType'

export const addExpedientes = (
  expedientes: ExpedienteTableModel | undefined,
): ExpedienteActionsTypes => ({
  type: ADD_EXPEDIENTES,
  payload: expedientes,
})

export const addExpediente = (
  expediente: ExpedienteCampoDatoModel | undefined,
): ExpedienteActionsTypes => ({
  type: ADD_EXPEDIENTE,
  payload: expediente,
})

export const clearExpediente = (
  expediente: ExpedienteModel | undefined,
): ExpedienteActionsTypes => ({
  type: CLEAR_EXPEDIENTE,
  payload: expediente,
})

export const addCoste = (
  coste: CosteCampoDatoModel | undefined,
): ExpedienteActionsTypes => ({
  type: ADD_COSTE,
  payload: coste,
})

export const addCostes = (
  costes: CosteCampoDatoGridModel | undefined,
): ExpedienteActionsTypes => ({
  type: ADD_COSTES,
  payload: costes,
})

export const addVehiculo = (
  vehiculo: VehiculoCampoDatoModel | undefined,
): ExpedienteActionsTypes => ({
  type: ADD_VEHICULO,
  payload: vehiculo,
})

export const addTareaspendientes = (
  tareasPendientes: TareaPendienteCampoDatoModel | undefined,
): ExpedienteActionsTypes => ({
  type: ADD_TAREASPENDIENTES,
  payload: tareasPendientes,
})

export const addDocumentos = (
  documentos: DocumentoCampoDatoModel | undefined,
): ExpedienteActionsTypes => ({
  type: ADD_DOCUMENTOS,
  payload: documentos,
})
