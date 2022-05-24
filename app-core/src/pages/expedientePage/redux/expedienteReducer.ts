import {
  ExpedienteState,
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

const initialState: ExpedienteState = {
  expedientes: undefined,
  expediente: undefined,
  coste: undefined,
  costes: undefined,
  vehiculo: undefined,
  tareasPendientes: undefined,
  documentos: undefined,
}

export const expedienteReducer = (
  state = initialState,
  action: ExpedienteActionsTypes,
): ExpedienteState => {
  switch (action.type) {
    /*     case ADD_EXPEDIENTES: {
      return { ...state, expedientes: action.payload }
    } */
    case ADD_EXPEDIENTE: {
      return { ...state, expediente: action.payload }
    }
    /*    case CLEAR_EXPEDIENTE: {
      return { ...state, expediente: action.payload }
    } */
    case ADD_COSTE: {
      return { ...state, coste: action.payload }
    }
    case ADD_COSTES: {
      return { ...state, costes: action.payload }
    }
    case ADD_VEHICULO: {
      return { ...state, vehiculo: action.payload }
    }
    case ADD_TAREASPENDIENTES: {
      return { ...state, tareasPendientes: action.payload }
    }
    case ADD_DOCUMENTOS: {
      return { ...state, documentos: action.payload }
    }
    default:
      return state
  }
}
