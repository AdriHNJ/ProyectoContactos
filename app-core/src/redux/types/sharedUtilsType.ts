export interface SharedUtilsState {
  openPopupExpediente: boolean | undefined
  isOpenPopup: boolean | undefined
  popupRef: any
  isChanged: boolean | undefined
}

export const OPEN_POPUPEXPEDIENTES = 'OPEN_POPUPEXPEDIENTES'
export const OPEN_POPUPSUJETOS = 'OPEN_POPUPSUJETOS'
export const ADD_DATAFORMCHANGE = 'ADD_DATAFORMCHANGE'

//export const ADD_EXPEDIENTE = "@todo/ADD_EXPEDIENTE";

interface AddPopupExpedientesRequest {
  type: typeof OPEN_POPUPEXPEDIENTES
  payload: boolean | undefined
}
interface AddPopupSujetosRequest {
  type: typeof OPEN_POPUPSUJETOS
  payload: boolean | undefined | any
}

interface AddDataFormChangeRequest {
  type: typeof ADD_DATAFORMCHANGE
  payload: boolean | undefined
}

/* 
interface AddExpedienteRequest {
  type: typeof ADD_EXPEDIENTE;
  payload: ExpedienteModel | undefined;
} */

export type sharedUtilsActionsTypes =
  | AddPopupExpedientesRequest
  | AddPopupSujetosRequest
  | AddDataFormChangeRequest
