import {
  ADD_DATAFORMCHANGE,
  OPEN_POPUPEXPEDIENTES,
  OPEN_POPUPSUJETOS,
  sharedUtilsActionsTypes,
} from '../types/sharedUtilsType'

export const addOpenPopupExpedientes = (
  OpenPopupExpedientes: boolean | undefined,
): sharedUtilsActionsTypes => ({
  type: OPEN_POPUPEXPEDIENTES,
  payload: OpenPopupExpedientes,
})
export const isOpenPopup = (
  isOpenPopup: boolean | undefined,
  popupRef: any,
): sharedUtilsActionsTypes => ({
  type: OPEN_POPUPSUJETOS,
  payload: { isOpenPopup: isOpenPopup, popupRef: popupRef },
})

export const addDataFormChange = (
  isChanged: boolean | undefined,
): sharedUtilsActionsTypes => ({
  type: ADD_DATAFORMCHANGE,
  payload: isChanged,
})
