import {
  ADD_DATAFORMCHANGE,
  OPEN_POPUPEXPEDIENTES,
  OPEN_POPUPSUJETOS,
  sharedUtilsActionsTypes,
  SharedUtilsState,
} from '../types/sharedUtilsType'

const initialState: SharedUtilsState = {
  openPopupExpediente: undefined,
  isOpenPopup: undefined,
  popupRef: undefined,
  isChanged: undefined,
}

export const sharedUtilsReducer = (
  state = initialState,
  action: sharedUtilsActionsTypes,
): SharedUtilsState => {
  switch (action.type) {
    case OPEN_POPUPEXPEDIENTES: {
      return { ...state, openPopupExpediente: action.payload }
    }
    case OPEN_POPUPSUJETOS: {
      return {
        ...state,
        isOpenPopup: action.payload.isOpenPopup,
        popupRef: action.payload.popupRef,
      }
    }
    case ADD_DATAFORMCHANGE: {
      return { ...state, isChanged: action.payload }
    }

    default:
      return state
  }
}
