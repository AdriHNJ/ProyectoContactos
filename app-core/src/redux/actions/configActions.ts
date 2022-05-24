import {
  SHOW_LOADER,
  HIDE_LOADER,
  ConfigActionsTypes,
} from "../types/configTypes";

export const addShowLoader = (
  visible: boolean | undefined
): ConfigActionsTypes => ({
  type: SHOW_LOADER,
  payload: visible,
});

export const addHideLoader = (
  visible: boolean | undefined
): ConfigActionsTypes => ({
  type: HIDE_LOADER,
  payload: visible,
});
