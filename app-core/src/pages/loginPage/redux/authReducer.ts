import { ConfigModel } from "../../../models/usuario/configModel";
import { ForgotPasswordModel } from "../models/forgotPasswordModel";
import {
  ADD_LOGIN_RESETPASSWORD,
  UserState,
  UserActionsTypes,
  ADD_LOGIN_SUCCESS,
  ADD_LOGIN_FAIL,
  ADD_LOGIN_ISALREADYLOGGED,
  UPDATE_THEME
} from "./authType";

const initialState: UserState = {
  isLoggedIn: false,
  user: undefined,
};

const userReducer = (
  state = initialState,
  action: UserActionsTypes
): UserState | undefined => {
  switch (action.type) {
    case ADD_LOGIN_SUCCESS: {
      return { ...state, isLoggedIn: true, user: action.payload };
    }
    case ADD_LOGIN_FAIL: {
      return { ...state, isLoggedIn: false, user: action.payload };
    }
    case ADD_LOGIN_ISALREADYLOGGED: {
      return { ...state, isLoggedIn: true, user: action.payload };
    }
    default:
      return state;
  }
};


const initialState2: ForgotPasswordModel = {
  Usuario: "",
  Permitir: false,
  Mensaje: "",
  Auth: "",
};
const userResetReducer = (
  state = initialState2,
  action: UserActionsTypes
): ForgotPasswordModel | undefined => {
  switch (action.type) {
    case ADD_LOGIN_RESETPASSWORD: {
      return {
        ...state,
        Usuario: action.payload?.Usuario!,
        Permitir: action.payload?.Permitir!,
        Mensaje: action.payload?.Mensaje!,
        Auth: action.payload?.Auth!,
      };
    }
    default:
      return state;
  }
};

const initialState3: ConfigModel = {
 Tema: "",
 Logo1: "",
 Logo2: "",
 MensajeCentral:"",
 LinkLegal: "",
 LinkCookies:"",
 LinkRgpd: "",
};

const userConfigReducer = (
  state = initialState3,
  action: UserActionsTypes
): ConfigModel | undefined => {
  switch (action.type) {
    case UPDATE_THEME: {
      return { ...state, Tema: action.payload?.Tema!,
 Logo1: action.payload?.Logo1!,
 Logo2: action.payload?.Logo2!,
 MensajeCentral:action.payload?.MensajeCentral!,
 LinkLegal: action.payload?.LinkLegal!,
 LinkCookies:action.payload?.LinkCookies!,
 LinkRgpd: action.payload?.LinkRgpd!};
    }
    default:
      return state;
  }
};






export { userReducer, userResetReducer };
