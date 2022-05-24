import {
  SHOW_LOADER,
  HIDE_LOADER,
  ConfigActionsTypes,
  configState,
} from "../types/configTypes";

const initialState: configState = {
  visibleLoader: false,
};

export const configReducer = (
  state = initialState,
  action: ConfigActionsTypes
): configState => {
  switch (action.type) {
    case SHOW_LOADER: {
      return { ...state, visibleLoader: action.payload };
    }
    case HIDE_LOADER: {
      return { ...state, visibleLoader: action.payload };
    }
    default:
      return state;
  }
};
