export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

export interface configState {
  visibleLoader: boolean | undefined;
}

interface AddShowLoader {
  type: typeof SHOW_LOADER;
  payload: boolean | undefined;
}
interface AddHideLoader {
  type: typeof HIDE_LOADER;
  payload: boolean | undefined;
}

export type ConfigActionsTypes = AddShowLoader | AddHideLoader;
